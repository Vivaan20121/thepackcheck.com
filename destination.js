/* PackCheck – destination page
   Reads ?name=&lat=&lon=&country= from the URL and builds a packing list for your
   trip dates from:
     • the forecast (Open-Meteo, next 16 days) and typical climate (past 5 years)
     • storms, strong wind, heavy rain, snow, heat and UV
     • tropical cyclone / hurricane seasons, plus live GDACS disaster alerts
       (cyclones, floods, droughts, wildfires)
     • how dry the last 30 days have been compared with normal
     • air quality (smoke / pollution) for the next few days
     • health risks: malaria and yellow fever (CDC / WHO lists) and dengue
   All sources are free and need no API key. Ticks are saved in this browser. */
(() => {
  const qs = new URLSearchParams(location.search);
  const name = qs.get("name");
  const lat = parseFloat(qs.get("lat"));
  const lon = parseFloat(qs.get("lon"));
  const countryParam = qs.get("country");

  if (!name || Number.isNaN(lat) || Number.isNaN(lon)) {
    location.replace("index.html");
    return;
  }

  const $ = (id) => document.getElementById(id);
  const fmtCoord = (v, pos, neg) => `${Math.abs(v).toFixed(2)}°${v >= 0 ? pos : neg}`;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  /* ======================================================================
     Health data
     Malaria: CDC Yellow Book country table (ISO numeric → [all areas?, where]).
     Yellow fever: WHO list of countries with risk of transmission.
     ====================================================================== */
  const MALARIA = {"4":[1,"All areas"],"24":[1,"All areas"],"50":[0,"Certain districts; no risk in Dhaka"],"68":[0,"All areas except La Paz city"],"72":[0,"Some northern districts; no risk in Gaborone"],"76":[0,"Some states (mostly the Amazon); no risk in major cities"],"90":[1,"All areas"],"104":[1,"All areas"],"108":[1,"All areas"],"116":[0,"Rural and forested areas; no risk in Phnom Penh, Siem Reap or Angkor Wat"],"120":[1,"All areas"],"140":[1,"All areas"],"148":[1,"All areas"],"170":[0,"All areas except Bogotá, Cartagena and Medellín"],"174":[1,"All areas"],"178":[1,"All areas"],"180":[1,"All areas"],"188":[0,"Alajuela and Limón provinces only"],"204":[1,"All areas"],"214":[0,"Some provinces, including some resort areas"],"218":[0,"Some provinces; no risk in Quito, Guayaquil or the Galápagos"],"226":[1,"All areas"],"231":[1,"All areas"],"232":[0,"All areas except Asmara"],"254":[0,"Inland and border areas; not Cayenne or the west coast"],"262":[1,"All areas"],"266":[1,"All areas"],"270":[1,"All areas"],"288":[1,"All areas"],"320":[0,"Some provinces; no risk in Guatemala City, Antigua or Lake Atitlán"],"324":[1,"All areas"],"328":[0,"All areas except Georgetown and New Amsterdam"],"332":[1,"All areas"],"340":[0,"Most areas; no risk in Tegucigalpa or San Pedro Sula"],"356":[0,"Most of the country except some states (such as Kerala and Sikkim)"],"360":[0,"Rural parts of some islands; no risk in major cities and resorts"],"364":[0,"Sistan-Baluchestan province only"],"384":[1,"All areas"],"404":[1,"All areas, including Nairobi"],"408":[0,"Southern provinces only"],"410":[0,"Rural northern areas near the DMZ only"],"418":[0,"Some provinces; no risk in Vientiane or Luang Prabang"],"430":[1,"All areas"],"450":[0,"All areas except Antananarivo"],"454":[1,"All areas"],"458":[0,"Rural forested areas only"],"466":[1,"All areas"],"478":[0,"Most areas except the far north"],"484":[0,"Parts of Campeche, Chiapas and southern Chihuahua only"],"508":[1,"All areas"],"516":[0,"Northern regions; no risk in Windhoek"],"524":[0,"Sudurpashchim and Karnali provinces only"],"548":[1,"All areas"],"558":[0,"Caribbean coast regions only; no risk in Managua"],"562":[1,"All areas"],"566":[1,"All areas"],"586":[1,"All areas"],"591":[0,"Some provinces; no risk in Panama City or the Canal Zone"],"598":[1,"All areas"],"604":[0,"East of the Andes only; no risk in Lima, Cusco or the coast"],"608":[0,"Palawan and Mindanao; no risk in Manila or cities"],"624":[1,"All areas"],"646":[1,"All areas"],"678":[1,"All areas"],"682":[0,"Asir and Jazan regions only"],"686":[1,"All areas"],"694":[1,"All areas"],"704":[0,"Rural parts of some provinces; no risk in cities or the deltas"],"706":[1,"All areas"],"710":[0,"Border areas in the north-east, including Kruger National Park"],"716":[1,"All areas"],"728":[1,"All areas"],"729":[1,"All areas"],"748":[0,"Eastern border areas only"],"764":[0,"Border provinces only; no risk in Bangkok or main resorts"],"768":[1,"All areas"],"800":[1,"All areas"],"834":[1,"All areas"],"854":[1,"All areas"],"862":[1,"All areas"],"887":[0,"All areas except Sana'a"],"894":[1,"All areas"]};
  const YELLOW_FEVER = new Set([24,204,854,108,120,140,148,178,384,180,226,231,266,270,288,324,624,404,430,466,478,562,566,686,694,728,729,768,800,32,68,76,170,218,254,328,591,600,604,740,780,862]);

  /* ---------- Header ---------- */
  document.title = `${name} · PackCheck`;
  $("destName").textContent = name;
  $("destCountry").textContent = countryParam && countryParam !== name ? countryParam : "Destination";
  $("destCoords").textContent = `${fmtCoord(lat, "N", "S")}, ${fmtCoord(lon, "E", "W")}`;

  const globe = window.PackCheck.createGlobe($("destGlobe"), { spin: false });
  globe.show({ name, lat, lon });

  /* ======================================================================
     Dates
     ====================================================================== */
  const DAY = 86400000;
  const iso = (d) => d.toISOString().slice(0, 10);
  const parse = (s) => new Date(s + "T00:00:00Z");
  const addDays = (s, n) => iso(new Date(parse(s).getTime() + n * DAY));
  const daysBetween = (a, b) => Math.round((parse(b) - parse(a)) / DAY);
  const today = (() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  })();
  const weekday = (s) => new Intl.DateTimeFormat(undefined, { weekday: "short", timeZone: "UTC" }).format(parse(s));
  const shortDate = (s) => new Intl.DateTimeFormat(undefined, { day: "numeric", month: "short", timeZone: "UTC" }).format(parse(s));
  const MAX_TRIP = 60;

  /* ---------- Storage ---------- */
  const placeKey = `${name}|${lat.toFixed(2)}|${lon.toFixed(2)}`;
  const store = {
    get(key) {
      try { return JSON.parse(localStorage.getItem(key)); } catch { return null; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage off – still works */ }
    },
  };

  let trip = store.get(`packcheck:trip:${placeKey}`);
  if (!trip || !trip.start || trip.end < today) trip = { start: today, end: addDays(today, 6) };
  if (trip.start < today) trip.start = today;

  const startInput = $("tripStart");
  const endInput = $("tripEnd");
  startInput.min = today;
  endInput.min = today;
  startInput.value = trip.start;
  endInput.value = trip.end;

  function showTripLength() {
    const n = daysBetween(trip.start, trip.end) + 1;
    $("tripLength").textContent = `${n} day${n === 1 ? "" : "s"}`;
  }
  showTripLength();

  let debounce = null;
  $("tripForm").addEventListener("change", () => {
    const s = startInput.value;
    let e = endInput.value;
    const err = $("tripError");
    if (!s || !e) {
      err.textContent = "Pick both dates.";
      return;
    }
    if (s < today) {
      err.textContent = "Your trip can't start in the past. dont do dat bud";
      return;
    }
    if (e < s) {
      e = s;
      endInput.value = s;
    }
    if (daysBetween(s, e) + 1 > MAX_TRIP) {
      err.textContent = `Trips up to ${MAX_TRIP} days are supported.`;
      return;
    }
    err.textContent = "";
    endInput.min = s;
    trip = { start: s, end: e };
    store.set(`packcheck:trip:${placeKey}`, trip);
    showTripLength();
    clearTimeout(debounce);
    debounce = setTimeout(analyse, 150);
  });

  /* ======================================================================
     Data sources (fetched once, reused when dates change)
     ====================================================================== */
  const getJSON = (url) => fetch(url).then((r) => {
    if (!r.ok) throw new Error(r.status);
    return r.json();
  });

  const year = Number(today.slice(0, 4));

  const sources = {
    forecast: getJSON(
      "https://api.open-meteo.com/v1/forecast" +
        `?latitude=${lat}&longitude=${lon}` +
        "&current=temperature_2m,weather_code" +
        "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum," +
        "precipitation_probability_max,wind_gusts_10m_max,uv_index_max" +
        "&timezone=auto&past_days=31&forecast_days=16"
    ),
    // Five full past years → typical weather for any dates + "normal" rain for the drought check
    climate: getJSON(
      "https://archive-api.open-meteo.com/v1/archive" +
        `?latitude=${lat}&longitude=${lon}` +
        `&start_date=${year - 5}-01-01&end_date=${year - 1}-12-31` +
        "&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_gusts_10m_max" +
        "&timezone=auto"
    ),
    air: getJSON(
      "https://air-quality-api.open-meteo.com/v1/air-quality" +
        `?latitude=${lat}&longitude=${lon}&hourly=us_aqi&timezone=auto&forecast_days=5`
    ),
    // Live disaster alerts from GDACS (UN / European Commission)
    alerts: getJSON(
      "https://www.gdacs.org/gdacsapi/api/events/geteventlist/SEARCH" +
        `?eventlist=TC;FL;DR;WF&fromDate=${addDays(today, -10)}&toDate=${today}&alertlevel=Green;Orange;Red`
    ),
    country: window.PackCheck.countryOf(lon, lat),
    coastal: window.PackCheck.isCoastal(lon, lat),
  };

  // Settle every source once; a failing one just means fewer checks
  const settled = Promise.all(
    Object.entries(sources).map(([k, p]) => p.then((v) => [k, v], () => [k, null]))
  ).then(Object.fromEntries);

  /* ---------- Local time ---------- */
  sources.forecast.then((d) => d.timezone && startClock(d.timezone)).catch(() => ($("destTime").textContent = ""));

  function startClock(timeZone) {
    const el = $("destTime");
    const tick = () => {
      try {
        el.textContent = `${new Intl.DateTimeFormat(undefined, { timeZone, hour: "numeric", minute: "2-digit", weekday: "short" }).format(new Date())} local time`;
      } catch {
        el.textContent = "";
      }
    };
    tick();
    setInterval(tick, 15000);
  }

  /* ======================================================================
     Analysis
     ====================================================================== */
  const WX = {
    0: ["Clear", "☀"], 1: ["Mostly clear", "🌤"], 2: ["Partly cloudy", "⛅"], 3: ["Cloudy", "☁"],
    45: ["Fog", "🌫"], 48: ["Fog", "🌫"],
    51: ["Drizzle", "🌦"], 53: ["Drizzle", "🌦"], 55: ["Drizzle", "🌦"], 56: ["Icy drizzle", "🌧"], 57: ["Icy drizzle", "🌧"],
    61: ["Light rain", "🌧"], 63: ["Rain", "🌧"], 65: ["Heavy rain", "🌧"], 66: ["Icy rain", "🌧"], 67: ["Icy rain", "🌧"],
    71: ["Light snow", "🌨"], 73: ["Snow", "🌨"], 75: ["Heavy snow", "❄"], 77: ["Snow grains", "🌨"],
    80: ["Showers", "🌦"], 81: ["Showers", "🌦"], 82: ["Heavy showers", "⛈"], 85: ["Snow showers", "🌨"], 86: ["Snow showers", "🌨"],
    95: ["Thunderstorms", "⛈"], 96: ["Thunderstorms", "⛈"], 99: ["Thunderstorms", "⛈"],
  };
  const wx = (c) => WX[c] || ["—", "·"];
  const isStorm = (c) => c >= 95;
  const isSnow = (c) => (c >= 71 && c <= 77) || c === 85 || c === 86;
  const max = (a) => (a.length ? Math.max(...a) : null);
  const min = (a) => (a.length ? Math.min(...a) : null);
  const mean = (a) => (a.length ? a.reduce((s, v) => s + v, 0) / a.length : null);
  const pct = (a, p) => {
    if (!a.length) return null;
    const s = [...a].sort((x, y) => x - y);
    return s[Math.min(s.length - 1, Math.floor(p * s.length))];
  };
  const clean = (a) => a.filter((v) => v != null && !Number.isNaN(v));

  function tripDays() {
    const out = [];
    for (let d = trip.start; d <= trip.end; d = addDays(d, 1)) out.push(d);
    return out;
  }

  /** Forecast for the trip days the 16-day forecast covers */
  function forecastStats(fc, days) {
    if (!fc) return null;
    const d = fc.daily;
    const idx = days.map((day) => d.time.indexOf(day)).filter((i) => i >= 0);
    if (!idx.length) return null;
    const pick = (k) => idx.map((i) => d[k]?.[i]);
    const codes = pick("weather_code");
    const rows = idx.map((i) => ({
      date: d.time[i], code: d.weather_code[i], hi: d.temperature_2m_max[i], lo: d.temperature_2m_min[i],
      rain: d.precipitation_probability_max?.[i], mm: d.precipitation_sum?.[i],
    }));
    return {
      rows,
      coverage: idx.length / days.length,
      hi: max(clean(pick("temperature_2m_max"))),
      lo: min(clean(pick("temperature_2m_min"))),
      wetDays: rows.filter((r) => (r.rain ?? 0) >= 50 || (r.mm ?? 0) >= 2).map((r) => r.date),
      heavyDays: rows.filter((r) => (r.mm ?? 0) >= 30).map((r) => r.date),
      stormDays: rows.filter((r) => isStorm(r.code)).map((r) => r.date),
      snow: codes.some(isSnow),
      gust: max(clean(pick("wind_gusts_10m_max"))),
      uv: max(clean(pick("uv_index_max"))),
    };
  }

  /** Same calendar dates in each of the last 5 years */
  function climateStats(cl, days) {
    if (!cl) return null;
    const d = cl.daily;
    const at = new Map(d.time.map((t, i) => [t, i]));
    const hi = [], lo = [], mm = [], gust = [];
    for (let y = year - 5; y <= year - 1; y++) {
      for (const day of days) {
        let key = `${y}${day.slice(4)}`;
        if (key.endsWith("02-29")) key = `${y}-02-28`;
        const i = at.get(key);
        if (i == null) continue;
        hi.push(d.temperature_2m_max[i]);
        lo.push(d.temperature_2m_min[i]);
        mm.push(d.precipitation_sum[i]);
        gust.push(d.wind_gusts_10m_max[i]);
      }
    }
    const H = clean(hi), L = clean(lo), M = clean(mm), G = clean(gust);
    if (!H.length) return null;
    return {
      meanHi: mean(H), meanLo: mean(L), hotHi: pct(H, 0.9), coldLo: pct(L, 0.1),
      wetShare: M.filter((v) => v >= 1).length / M.length,
      heavyShare: M.filter((v) => v >= 20).length / M.length,
      gust: pct(G, 0.9),
      years: `${year - 5}–${year - 1}`,
    };
  }

  /** Rain in the last 30 days vs the same 30 days in past years */
  function dryness(fc, cl) {
    if (!fc || !cl) return null;
    const recent = [];
    for (let i = 1; i <= 30; i++) recent.push(addDays(today, -i));
    const fi = new Map(fc.daily.time.map((t, i) => [t, i]));
    const got = clean(recent.map((d) => fc.daily.precipitation_sum[fi.get(d)]));
    if (got.length < 25) return null;
    const last30 = got.reduce((s, v) => s + v, 0);
    const at = new Map(cl.daily.time.map((t, i) => [t, i]));
    const totals = [];
    for (let y = year - 5; y <= year - 1; y++) {
      const vals = clean(recent.map((d) => cl.daily.precipitation_sum[at.get(`${y}${d.slice(4)}`)]));
      if (vals.length >= 25) totals.push(vals.reduce((s, v) => s + v, 0));
    }
    if (!totals.length) return null;
    return { last30, normal: mean(totals) };
  }

  /** Is the trip inside a tropical cyclone / hurricane / typhoon season? */
  function cycloneSeason(days, coastal) {
    if (!coastal || Math.abs(lat) < 4 || Math.abs(lat) > 40) return null;
    const months = new Set(days.map((d) => Number(d.slice(5, 7))));
    const L = lon > 180 ? lon - 360 : lon;
    const basins = [
      { test: lat > 0 && L >= -140 && L <= -10, months: [6, 7, 8, 9, 10, 11], label: "Hurricane season", span: "June to November" },
      { test: lat > 0 && L >= 100 && L <= 180, months: [5, 6, 7, 8, 9, 10, 11], label: "Typhoon season", span: "May to November" },
      { test: lat > 0 && L >= 45 && L < 100, months: [4, 5, 6, 10, 11, 12], label: "Cyclone season", span: "April to June and October to December" },
      { test: lat < 0 && L >= 30 && L < 110, months: [11, 12, 1, 2, 3, 4], label: "Cyclone season", span: "November to April" },
      { test: lat < 0 && (L >= 110 || L <= -130), months: [11, 12, 1, 2, 3, 4], label: "Cyclone season", span: "November to April" },
    ];
    const b = basins.find((x) => x.test);
    if (!b || !b.months.some((m) => months.has(m))) return null;
    return b;
  }

  /** Live GDACS alerts close enough to matter */
  function nearbyAlerts(geo) {
    if (!geo || !Array.isArray(geo.features)) return [];
    const RANGE = { TC: 1000, FL: 300, DR: 600, WF: 200 };
    const out = [];
    for (const f of geo.features) {
      const p = f.properties || {};
      const type = p.eventtype;
      const current = p.iscurrent === true || p.iscurrent === "true";
      if (!RANGE[type] || !current || !f.geometry || f.geometry.type !== "Point") continue;
      const km = d3.geoDistance(f.geometry.coordinates, [lon, lat]) * 6371;
      if (km > RANGE[type]) continue;
      out.push({
        type, km: Math.round(km), level: p.alertlevel || "Green",
        name: p.eventname || p.name || "",
        url: p.url?.report || "https://www.gdacs.org/",
      });
    }
    return out.sort((a, b) => a.km - b.km);
  }

  function airQuality(air, days) {
    if (!air?.hourly) return null;
    const vals = clean(air.hourly.time.map((t, i) => (days.includes(t.slice(0, 10)) ? air.hourly.us_aqi[i] : null)));
    return vals.length ? max(vals) : null;
  }

  /* ---------- Build alerts + packing suggestions ---------- */
  function buildAdvice(data) {
    const days = tripDays();
    const fc = forecastStats(data.forecast, days);
    const cl = climateStats(data.climate, days);
    const useClim = !fc || fc.coverage < 1; // part of the trip is beyond the forecast
    const startsIn = daysBetween(today, trip.start);
    const country = data.country;
    const alerts = [];
    const items = new Map(); // text → why
    const add = (why, ...texts) => texts.forEach((t) => !items.has(t) && items.set(t, why));
    const r = (v) => Math.round(v);

    /* -- Temperature -- */
    const hi = Math.max(fc?.hi ?? -99, useClim && cl ? cl.meanHi : -99);
    const lo = Math.min(fc?.lo ?? 99, useClim && cl ? cl.meanLo : 99);
    const peak = Math.max(fc?.hi ?? -99, useClim && cl ? cl.hotHi : -99);

    if (hi >= 26) add(`Highs around ${r(hi)}°C`, "Sunscreen (SPF 30+)", "Sunglasses", "Hat", "Light, breathable clothes", "Refillable water bottle");
    if (hi >= 24) add(`Warm enough to swim (${r(hi)}°C)`, "Swimwear");
    if (peak >= 35) {
      alerts.push({ level: "warn", icon: "🌡", title: "Extreme heat", text: `Temperatures could reach ${r(peak)}°C. Plan outdoor time for mornings and evenings.` });
      add(`Up to ${r(peak)}°C`, "Electrolyte sachets", "Cooling towel");
    }
    if (lo <= 15 && lo > 8) add(`Lows around ${r(lo)}°C`, "Light jacket or sweater");
    if (lo <= 8) add(`Lows around ${r(lo)}°C`, "Warm coat", "Thermal layers");
    if (lo <= 0) {
      add(`Below freezing (${r(lo)}°C)`, "Gloves", "Beanie", "Warm socks");
      alerts.push({ level: "info", icon: "❄", title: "Freezing temperatures", text: `Lows around ${r(lo)}°C. Watch for ice on roads and paths.` });
    }

    /* -- Sun -- */
    const strongSun = (fc?.uv ?? 0) >= 8 || (useClim && cl && Math.abs(lat) < 30 && cl.meanHi >= 27);
    if (strongSun) {
      alerts.push({ level: "info", icon: "☀", title: "Very strong sun", text: fc?.uv ? `UV index up to ${r(fc.uv)}. Burn time can be under 15 minutes around midday.` : "UV is very high at this latitude. Burn time can be under 15 minutes around midday." });
      add("Very high UV", "Sunscreen (SPF 50)", "After-sun lotion", "Lip balm with SPF");
    }

    /* -- Rain, storms, wind, snow -- */
    const wetFc = fc?.wetDays.length > 0;
    const wetClim = useClim && cl && cl.wetShare >= 0.3;
    if (wetFc || wetClim) {
      const why = wetFc
        ? `Rain likely on ${fc.wetDays.slice(0, 3).map(weekday).join(", ")}${fc.wetDays.length > 3 ? "…" : ""}`
        : `Rain on about ${r(cl.wetShare * 100)}% of days at this time of year`;
      add(why, "Compact umbrella", "Rain jacket");
      if ((cl?.wetShare ?? 0) >= 0.5 || (fc && fc.wetDays.length / fc.rows.length >= 0.5)) add(why, "Quick-dry clothes", "Waterproof phone pouch");
    }

    const heavyFc = fc?.heavyDays.length > 0;
    const heavyClim = useClim && cl && cl.heavyShare >= 0.08;
    if (heavyFc || heavyClim) {
      alerts.push({
        level: "warn", icon: "🌧", title: heavyFc ? "Heavy rain forecast" : "Wet season downpours",
        text: heavyFc
          ? `30 mm or more of rain expected on ${fc.heavyDays.map(weekday).join(", ")}. Local flooding is possible.`
          : `Heavy downpours (20 mm+) happen on about ${r(cl.heavyShare * 100)}% of days at this time of year.`,
      });
      add("Heavy rain", "Waterproof sandals or shoes", "Dry bag");
    }

    if (fc?.stormDays.length) {
      alerts.push({ level: "warn", icon: "⛈", title: "Thunderstorms forecast", text: `Storms expected on ${fc.stormDays.map((d) => `${weekday(d)} ${shortDate(d)}`).join(", ")}. Avoid open ground and water when you hear thunder.` });
      add("Thunderstorms forecast", "Rain jacket", "Power bank");
    }

    const gust = Math.max(fc?.gust ?? 0, useClim && cl ? cl.gust : 0);
    if (gust >= 60) {
      alerts.push({ level: "warn", icon: "💨", title: "Strong winds", text: `Gusts up to ${r(gust)} km/h${fc?.gust >= 60 ? " in the forecast" : " are common at this time of year"}. Ferries and flights can be delayed.` });
      add(`Gusts up to ${r(gust)} km/h`, "Windproof jacket");
    }

    if (fc?.snow || (useClim && cl && cl.meanLo <= -2 && cl.wetShare >= 0.2)) {
      add("Snow possible", "Waterproof boots");
    }

    /* -- Cyclone season -- */
    const season = cycloneSeason(days, data.coastal);
    if (season) {
      alerts.push({ level: "warn", icon: "🌀", title: season.label, text: `Your dates fall in the ${season.label.toLowerCase()} for this region (${season.span}). Storms aren't certain, but check forecasts before and during your trip.` });
      add(season.label, "Travel insurance that covers weather delays", "Power bank", "Torch or headlamp", "Copies of documents in a waterproof pouch");
    }

    /* -- Live disasters (GDACS) -- */
    const live = startsIn <= 21 ? nearbyAlerts(data.alerts) : [];
    const LIVE = {
      TC: ["🌀", "Active tropical cyclone", "Tropical cyclone"],
      FL: ["🌊", "Flooding nearby", "Flooding"],
      DR: ["🏜", "Drought in the region", "Drought"],
      WF: ["🔥", "Wildfire nearby", "Wildfire"],
    };
    for (const a of live) {
      const [icon, title, short] = LIVE[a.type];
      alerts.push({
        level: a.level === "Red" || (a.type === "TC" && a.level !== "Green") ? "danger" : "warn",
        icon, title: a.name ? `${title}: ${a.name}` : title,
        text: `${a.level} alert about ${a.km} km away.`,
        link: { href: a.url, text: "GDACS report" },
      });
      if (a.type === "TC") add(`${short} nearby`, "Travel insurance that covers weather delays", "Power bank", "Torch or headlamp");
      if (a.type === "FL") add(`${short} nearby`, "Waterproof sandals or shoes", "Dry bag");
      if (a.type === "WF") add(`${short} nearby`, "N95 / KN95 masks");
      if (a.type === "DR") add(`${short} in the region`, "Refillable water bottle", "Water purification tablets");
    }

    /* -- Drought: much drier than normal lately -- */
    if (startsIn <= 60) {
      const dry = dryness(data.forecast, data.climate);
      if (dry && dry.normal >= 15 && dry.last30 < dry.normal * 0.35 && !live.some((a) => a.type === "DR")) {
        alerts.push({ level: "warn", icon: "🏜", title: "Much drier than usual", text: `Only ${r(dry.last30)} mm of rain in the last 30 days, against about ${r(dry.normal)} mm normally. Expect dusty conditions, and possible water restrictions or fire bans.` });
        add("Very dry lately", "Refillable water bottle", "Lip balm with SPF", "Moisturiser");
      }
    }

    /* -- Air quality (next 5 days only) -- */
    const aqi = airQuality(data.air, days);
    if (aqi != null && aqi > 100) {
      alerts.push({ level: aqi > 150 ? "danger" : "warn", icon: "😷", title: aqi > 150 ? "Unhealthy air" : "Poor air quality", text: `Air quality index up to ${r(aqi)} in the next few days${aqi > 150 ? ". Limit time outdoors" : ". Sensitive groups should limit time outdoors"}.` });
      add(`Air quality up to ${r(aqi)}`, "N95 / KN95 masks");
    }

    /* -- Health -- */
    const cid = country?.id;
    const malaria = cid != null ? MALARIA[cid] : null;
    if (malaria) {
      const [everywhere, where] = malaria;
      alerts.push({
        level: everywhere ? "danger" : "warn", icon: "🦟",
        title: everywhere ? "Malaria risk" : "Malaria in some areas",
        text: `${where}. Ask a travel clinic whether you need antimalarial tablets.`,
      });
      add("Malaria risk", "Insect repellent (DEET 20%+ or picaridin)", "Long sleeves and trousers");
      if (everywhere) add("Malaria risk", "Mosquito net", "Antimalarial tablets (from a travel clinic)");
    }
    if (cid != null && YELLOW_FEVER.has(cid)) {
      alerts.push({ level: "warn", icon: "💉", title: "Yellow fever risk", text: "WHO lists this country as having yellow fever risk. Vaccination is recommended for many areas. You may need the certificate here or at your next border. Get vaccinated at least 10 days before you travel." });
      add("Yellow fever risk", "Yellow fever vaccination certificate", "Insect repellent (DEET 20%+ or picaridin)");
    }
    // Countries CDC rates as only sporadic dengue risk (USA, Japan) are left out
    const SPORADIC_DENGUE = new Set([840, 392]);
    const warmTropics = Math.abs(lat) <= 30 && (hi + lo) / 2 >= 20 && !SPORADIC_DENGUE.has(cid);
    const notDesert = wetFc || (cl && cl.wetShare >= 0.1);
    if (warmTropics && notDesert) {
      alerts.push({ level: "info", icon: "🦟", title: "Dengue and other mosquito-borne illness", text: "Common in warm tropical areas, often year-round and in cities too. Mosquitoes that spread dengue bite in the daytime." });
      add("Dengue risk", "Insect repellent (DEET 20%+ or picaridin)", "Long sleeves and trousers", "prophylactic medications if recommended by a travel clinic");
    }
    if (malaria || YELLOW_FEVER.has(cid) || (warmTropics && notDesert)) {
      add("Mosquito-borne illness", "Anti-itch cream");
    }

    // One sunscreen is enough: the stronger one wins
    if (items.has("Sunscreen (SPF 50)")) items.delete("Sunscreen (SPF 30+)");

    const order = { danger: 0, warn: 1, info: 2 };
    alerts.sort((a, b) => order[a.level] - order[b.level]);
    return { alerts, items, fc, cl, startsIn };
  }

  /* ======================================================================
     Rendering
     ====================================================================== */
  function renderAlerts(alerts) {
    const ul = $("riskList");
    ul.innerHTML = "";
    $("riskNote").textContent = alerts.length ? `${alerts.length} to know about` : "";
    if (!alerts.length) {
      ul.innerHTML = '<li class="risk risk--ok"><span class="risk-icon" aria-hidden="true">✓</span><div><b>No major risks spotted</b><p>Nothing unusual for weather, storms or health on these dates.</p></div></li>';
      return;
    }
    for (const a of alerts) {
      const li = document.createElement("li");
      li.className = `risk risk--${a.level}`;
      li.innerHTML = `
        <span class="risk-icon" aria-hidden="true">${a.icon}</span>
        <div>
          <b>${esc(a.title)}</b>
          <p>${esc(a.text)}${a.link ? ` <a href="${esc(a.link.href)}" target="_blank" rel="noopener">${esc(a.link.text)}</a>` : ""}</p>
        </div>`;
      ul.append(li);
    }
  }

  function renderWeather({ fc, cl, startsIn }, current) {
    const ul = $("wxDays");
    ul.innerHTML = "";
    if (current) $("wxNow").textContent = `Now ${Math.round(current.temperature_2m)}°C · ${wx(current.weather_code)[0]}`;

    if (fc) {
      $("wxTitle").textContent = fc.coverage < 1 ? "Forecast for your trip" : "Your trip forecast";
      fc.rows.slice(0, 10).forEach((d) => {
        const [label, icon] = wx(d.code);
        const li = document.createElement("li");
        li.className = "wx-day";
        li.innerHTML = `
          <span class="wx-name">${d.date === today ? "Today" : weekday(d.date)}</span>
          <span class="wx-icon" aria-hidden="true">${icon}</span>
          <span class="wx-label">${label}</span>
          <span class="wx-rain">${d.rain != null ? d.rain + "%" : ""}</span>
          <span class="wx-temp"><b>${Math.round(d.hi)}°</b> ${Math.round(d.lo)}°</span>`;
        ul.append(li);
      });
      const extra = fc.rows.length > 10 ? fc.rows.length - 10 : 0;
      const beyond = Math.round((1 - fc.coverage) * (daysBetween(trip.start, trip.end) + 1));
      if (extra || beyond) {
        const li = document.createElement("li");
        li.className = "wx-loading";
        li.textContent = [extra && `+${extra} more forecast days`, beyond && `${beyond} days beyond the forecast use typical weather`].filter(Boolean).join(" · ");
        ul.append(li);
      }
      return;
    }

    if (cl) {
      $("wxTitle").textContent = "Typical for your dates";
      const rows = [
        ["Average high", `${Math.round(cl.meanHi)}°C`],
        ["Average low", `${Math.round(cl.meanLo)}°C`],
        ["Hot days reach", `${Math.round(cl.hotHi)}°C`],
        ["Rainy days", `${Math.round(cl.wetShare * 100)}%`],
      ];
      for (const [k, v] of rows) {
        const li = document.createElement("li");
        li.className = "wx-stat";
        li.innerHTML = `<span>${k}</span><b>${v}</b>`;
        ul.append(li);
      }
      const note = document.createElement("li");
      note.className = "wx-loading";
      note.textContent = `Your trip starts in ${startsIn} days, beyond the 16-day forecast. Based on ${cl.years}.`;
      ul.append(note);
      return;
    }

    ul.innerHTML = '<li class="wx-loading">Weather isn\'t available right now.</li>';
  }

  /* ======================================================================
     Packing list
     ====================================================================== */
  const BASE = [
    "Passport and travel documents", "Phone and charger", "Travel adapter", "Wallet and cards",
    "Toiletries", "Medications", "Basic first-aid kit", "Underwear and socks", "Comfortable walking shoes",
  ];

  const LIST_KEY = `packcheck:list:${placeKey}`;
  let saved = store.get(LIST_KEY);
  if (Array.isArray(saved)) saved = { items: saved, removed: [] }; // older format
  let list = saved?.items || BASE.map((text) => ({ text, done: false }));
  let removed = new Set(saved?.removed || []);
  const saveList = () => store.set(LIST_KEY, { items: list, removed: [...removed] });

  /** Fold new suggestions in: keep ticks, custom items and base items; drop stale unticked suggestions */
  function applySuggestions(items) {
    const key = (t) => t.toLowerCase();
    list = list.filter((i) => !i.auto || i.done || items.has(i.text));
    for (const i of list) if (i.auto && items.has(i.text)) i.why = items.get(i.text);
    const have = new Set(list.map((i) => key(i.text)));
    for (const [text, why] of items) {
      if (!have.has(key(text)) && !removed.has(key(text))) list.push({ text, done: false, auto: true, why });
    }
    saveList();
    renderList();
  }

  function renderList() {
    const ul = $("packList");
    ul.innerHTML = "";
    list.forEach((item, i) => {
      const li = document.createElement("li");
      li.className = "pack-item" + (item.done ? " is-done" : "");
      const id = `pack-${i}`;
      li.innerHTML = `
        <input type="checkbox" id="${id}" ${item.done ? "checked" : ""}>
        <label for="${id}"><span class="pack-text"></span>${item.why ? '<span class="pack-why"></span>' : ""}</label>
        <button type="button" class="pack-remove" aria-label="Remove ${esc(item.text)}">×</button>`;
      li.querySelector(".pack-text").textContent = item.text;
      if (item.why) li.querySelector(".pack-why").textContent = item.why;
      li.querySelector("input").addEventListener("change", (e) => {
        item.done = e.target.checked;
        li.classList.toggle("is-done", item.done);
        saveList();
        renderCount();
      });
      li.querySelector(".pack-remove").addEventListener("click", () => {
        if (item.auto) removed.add(item.text.toLowerCase()); // don't suggest it again
        list.splice(i, 1);
        saveList();
        renderList();
      });
      ul.append(li);
    });
    renderCount();
  }

  function renderCount() {
    const done = list.filter((i) => i.done).length;
    $("packCount").textContent = `${done} of ${list.length} packed`;
    $("packBar").style.width = list.length ? `${(done / list.length) * 100}%` : "0%";
  }

  $("packAdd").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = $("packInput");
    const text = input.value.trim();
    const err = $("packError");
    if (!text) {
      err.textContent = "Type something to add first.";
      return;
    }
    if (list.some((i) => i.text.toLowerCase() === text.toLowerCase())) {
      err.textContent = "That's already on your list.";
      return;
    }
    removed.delete(text.toLowerCase());
    list.push({ text, done: false, custom: true });
    input.value = "";
    saveList();
    renderList();
  });
  $("packInput").addEventListener("input", () => ($("packError").textContent = ""));

  /* ======================================================================
     Run
     ====================================================================== */
  renderList();

  async function analyse() {
    const data = await settled;
    const advice = buildAdvice(data);
    renderAlerts(advice.alerts);
    renderWeather(advice, data.forecast?.current);
    applySuggestions(advice.items);
    if (!data.forecast && !data.climate) {
      $("packHint").textContent = "Couldn't reach the weather service, so these are mostly essentials. Health and season checks still apply.";
    }
  }

  analyse();
})();

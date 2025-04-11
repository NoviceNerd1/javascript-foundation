# 🧠 JavaScript Foundations – Progress & Insight Log

Tracking progress, errors, realizations, confidence, and execution steps during core JavaScript brushing. Optimized for speed, clarity, and retention.

---

## 📅 Log Format
[Date] | [Topic] | [Key Insight / Fix] | [Error / Why It Happened] | [Time Spent] | [Confidence] | [Revisit?] | [Next Step + Deadline]

---

## 🔄 Daily Log

| Date       | Topic          | Key Insight / Fix                                                               | Error / Why It Happened                                           | Time Spent | Conf. (1–5) | Revisit? | Next Step + Deadline                              |
|------------|----------------|----------------------------------------------------------------------------------|-------------------------------------------------------------------|------------|-------------|----------|---------------------------------------------------|
| 2025-04-11 | `Date`, `Intl` | `.toLocaleString()` requires valid keys; fails silently with unsupported fields | Used `getFullYear` as option key (wrong API usage, skipped docs) | 1.5h       | 2           | ✅        | Revisit formatting options – 20m by 2025-04-12     |
| 2025-04-11 | `setTimeout()` | It queues a task – does **not block** execution                                | Assumed it worked like `sleep()`; didn’t understand async queue  | 1h         | 3           | ✅        | Write `sleep(ms)` wrapper – 30m by 2025-04-12      |
| 2025-04-11 | `Date.now()`   | Returns epoch ms; convert to UNIX with `/1000`                                  | Tried `.toISOString()` on a number (primitive vs object misuse)  | 45m        | 3.5         | ❌        | Wrap in utility fn + reuse – 15m by 2025-04-12     |

---

## 🧾 Daily Summary – 2025-04-11

- **Total time:** 3h 15m  
- **Topics covered:** `Date`, `Intl`, `Timers`, `Math`  
- **Errors fixed:** 3  
- **Confidence avg:** 2.8 / 5  
- **Mental sharpness:** Moderate  
- **Focus blockers:** Jumped too fast to terminal, under-read docs  
- **Repeat topics tomorrow:** `setTimeout`, `Intl.DateTimeFormat`

---

## 🔁 Pattern Watch

- ❌ Assumed method names without validating signatures
- ❌ Treated primitives like objects (`Date.now()` issue)
- ✅ Strength: Logged errors and insights clearly; spotted patterns fast

---

## 🎯 Next Priority Topics

> You’re now shifting to **execution model core**:

- [ ] `var / let / const` + temporal dead zone  
- [ ] `Hoisting` (functions vs vars)  
- [ ] `Scope chains`, `Closures`  
- [ ] `Call stack`, `Event loop`  
- [ ] Promises + `async/await` fundamentals

---

> **Track like a machine. Learn like a hunter. Execute like a killer.**
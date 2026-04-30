document.addEventListener("DOMContentLoaded", function () {

  const months = document.querySelectorAll(".calendar__month-title");
  const popup = document.getElementById("mini-calendar");
  const miniDays = document.getElementById("mini-days");
  const miniTitle = document.getElementById("mini-title");
  const closeBtn = document.getElementById("close-mini");
  const okBtn = document.getElementById("ok-mini");
  const historyList = document.getElementById("calendar-history-list");
  const clearHistoryBtn = document.getElementById("clear-history");

  // Form elements
  const eventForm = document.getElementById("event-form");
  const eventNameInput = document.getElementById("event-name");
  const eventDateInput = document.getElementById("event-date");
  const eventTypeInput = document.getElementById("event-type");

  let selectedDay = null;
  let currentMonth = "";

  const daysInMonth = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31
  };

  const monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];

  // ================= HISTORY FUNCTIONS =================
  function getHistory() {
    const history = localStorage.getItem("calendarHistory");
    return history ? JSON.parse(history) : [];
  }

  function saveHistory(history) {
    localStorage.setItem("calendarHistory", JSON.stringify(history));
  }

  function addToHistory(month, day, eventName, eventType) {
    const history = getHistory();
    const dateString = month + " " + day + ", 2026";

    const entry = {
      id: Date.now(),
      month: month,
      day: day,
      dateString: dateString,
      eventName: eventName || "Special Moment",
      eventType: eventType || "Other",
      timestamp: new Date().toISOString()
    };

    history.unshift(entry);
    saveHistory(history);
    renderHistory();
  }

  function removeFromHistory(id) {
    let history = getHistory();
    history = history.filter(item => item.id !== id);
    saveHistory(history);
    renderHistory();
  }

  function clearAllHistory() {
    localStorage.removeItem("calendarHistory");
    renderHistory();
  }

  function renderHistory() {
    const history = getHistory();

    if (history.length === 0) {
      historyList.innerHTML = '<p class="calendar__history-empty">No special moments selected yet 🌸 Click on any day to add one!</p>';
      clearHistoryBtn.style.display = "none";
      return;
    }

    clearHistoryBtn.style.display = "inline-block";

    let html = '';
    history.forEach(item => {
      html += `
        <div class="calendar__history-item" data-id="${item.id}">
          <div class="calendar__history-info">
            <span class="calendar__history-date">📅 ${item.dateString}</span>
            <span class="calendar__history-name">${item.eventName}</span>
            <span class="calendar__history-badge">${item.eventType}</span>
          </div>
          <button class="calendar__history-delete" title="Remove this moment">🗑️</button>
        </div>
      `;
    });

    historyList.innerHTML = html;

    document.querySelectorAll(".calendar__history-delete").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const item = e.target.closest(".calendar__history-item");
        const id = parseInt(item.dataset.id);
        removeFromHistory(id);
      });
    });
  }

  // ================= FORM SUBMIT - HIGHLIGHT ON CALENDAR =================
  eventForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const eventName = eventNameInput.value.trim();
    const eventDate = eventDateInput.value; // format: YYYY-MM-DD
    const eventType = eventTypeInput.value;

    if (!eventDate) {
      alert("Please select a date! 📅");
      return;
    }

    // Parse date
    const dateObj = new Date(eventDate);
    const monthIndex = dateObj.getMonth();
    const day = dateObj.getDate();
    const monthName = monthNames[monthIndex];

    // Highlight on calendar
    highlightDateOnCalendar(monthName, day);

    // Add to history
    addToHistory(monthName, day, eventName, eventType);

    // Reset form
    eventForm.reset();

    // Show success
    alert("🌸 Special moment saved! Check your calendar and history below.");
  });

  function highlightDateOnCalendar(monthName, day) {
    // Find the card for this month
    const cards = document.querySelectorAll(".calendar__card");
    cards.forEach(card => {
      const cardMonth = card.dataset.month;
      if (cardMonth === monthName) {
        const days = card.querySelectorAll(".calendar__mini span");
        days.forEach(d => {
          if (parseInt(d.textContent) === day) {
            d.classList.add("selected");
          }
        });
      }
    });
  }

  // ================= OPEN CALENDAR POPUP =================
  months.forEach(month => {
    month.addEventListener("click", () => {
      currentMonth = month.textContent.replace("🌸", "").trim();
      miniTitle.textContent = currentMonth + " 🌷";

      miniDays.innerHTML = "";
      selectedDay = null;

      const totalDays = daysInMonth[currentMonth];

      for (let i = 1; i <= totalDays; i++) {
        const day = document.createElement("span");
        day.textContent = i;

        // Check if this day was previously selected
        const savedDate = localStorage.getItem("selectedDate");
        if (savedDate === currentMonth + "-" + i) {
          day.classList.add("selected");
          selectedDay = i;
        }

        day.addEventListener("click", () => {
          // TOGGLE: if already selected, remove it
          if (day.classList.contains("selected")) {
            day.classList.remove("selected");
            selectedDay = null;
            localStorage.removeItem("selectedDate");
            updateOutsideCalendar(currentMonth, null);
            return;
          }

          // Otherwise, remove from others and select this one
          miniDays.querySelectorAll("span").forEach(d => {
            d.classList.remove("selected");
          });

          day.classList.add("selected");
          selectedDay = i;
        });

        miniDays.appendChild(day);
      }

      popup.style.display = "flex";
    });
  });

  // ================= OK BUTTON - SAVE AND CLOSE =================
  okBtn.addEventListener("click", () => {
    if (!selectedDay) {
      alert("🌸 Please select a day first!");
      return;
    }

    // Save to localStorage
    localStorage.setItem("selectedDate", currentMonth + "-" + selectedDay);

    // Update outside calendar
    updateOutsideCalendar(currentMonth, selectedDay);

    // Add to history (with generic name if no form data)
    addToHistory(currentMonth, selectedDay, "Selected from Calendar", "Other");

    // Close popup
    popup.style.display = "none";
  });

  // ================= CLOSE BUTTON =================
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // ================= CLICK OUTSIDE TO CLOSE =================
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });

  // ================= OUTSIDE MINI CALENDAR CLICK =================
  document.querySelectorAll(".calendar__mini span").forEach(day => {
    day.addEventListener("click", () => {
      // TOGGLE: if already selected → remove it
      if (day.classList.contains("selected")) {
        day.classList.remove("selected");
        localStorage.removeItem("selectedDate");
        return;
      }

      // Otherwise remove from others and add new
      document.querySelectorAll(".calendar__mini span").forEach(d => {
        d.classList.remove("selected");
      });

      day.classList.add("selected");

      // Save the selection
      const card = day.closest(".calendar__card");
      const monthTitle = card.dataset.month;
      localStorage.setItem("selectedDate", monthTitle + "-" + day.textContent);

      // Add to history
      addToHistory(monthTitle, parseInt(day.textContent), "Quick Select", "Other");
    });
  });

  // ================= CLEAR HISTORY BUTTON =================
  clearHistoryBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all your flower moments history? 🌸")) {
      clearAllHistory();
    }
  });

  // ================= HELPER FUNCTION =================
  function updateOutsideCalendar(monthName, dayNumber) {
    document.querySelectorAll(".calendar__card").forEach(card => {
      const cardMonth = card.dataset.month;

      if (cardMonth === monthName) {
        const days = card.querySelectorAll(".calendar__mini span");

        days.forEach(d => {
          d.classList.remove("selected");
          if (dayNumber && parseInt(d.textContent) === dayNumber) {
            d.classList.add("selected");
          }
        });
      }
    });
  }

  // ================= LOAD SAVED SELECTION ON PAGE LOAD =================
  function loadSavedSelection() {
    const savedDate = localStorage.getItem("selectedDate");
    if (savedDate) {
      const [savedMonth, savedDay] = savedDate.split("-");
      updateOutsideCalendar(savedMonth, parseInt(savedDay));
    }
  }

  loadSavedSelection();
  renderHistory();

});
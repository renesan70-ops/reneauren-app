/* =========================================================
   RENÉ AUREN APP
   app.js

   Funciones:
   - Cambio entre riñón, hígado graso y próstata
   - Buscador y sugerencias
   - Resultados de alimentos
   - Favoritos
   - Preguntas por WhatsApp
   - Navegación inferior
   - Modal de ayuda
   - Instalación PWA
   - Service Worker
   ========================================================= */

"use strict";

/* =========================================================
   CONFIGURACIÓN GENERAL
   ========================================================= */

const WHATSAPP_NUMBER = "50375596706";

const STORAGE_KEYS = {
  favorites: "reneAurenFavorites",
  selectedCondition: "reneAurenSelectedCondition"
};

let selectedCondition = "kidney";
let currentFood = null;
let deferredInstallPrompt = null;
let toastTimer = null;


/* =========================================================
   ELEMENTOS DE LA PÁGINA
   ========================================================= */

const heroSection = document.querySelector(".hero-section");
const heroBadge = document.getElementById("heroBadge");
const heroTitle = document.getElementById("heroTitle");
const heroDescription = document.getElementById("heroDescription");

const conditionTabs =
  document.querySelectorAll(".condition-tab");

const foodSearch =
  document.getElementById("foodSearch");

const clearSearchButton =
  document.getElementById("clearSearchButton");

const searchSuggestions =
  document.getElementById("searchSuggestions");

const frequentFoods =
  document.getElementById("frequentFoods");

const resultSection =
  document.getElementById("resultSection");

const emptyState =
  document.getElementById("emptyState");

const resultConditionBadge =
  document.getElementById("resultConditionBadge");

const resultFoodName =
  document.getElementById("resultFoodName");

const resultStatus =
  document.getElementById("resultStatus");

const resultSummary =
  document.getElementById("resultSummary");

const resultBenefits =
  document.getElementById("resultBenefits");

const resultWarning =
  document.getElementById("resultWarning");

const resultPortion =
  document.getElementById("resultPortion");

const favoriteButton =
  document.getElementById("favoriteButton");

const askAboutFoodButton =
  document.getElementById("askAboutFoodButton");

const questionForm =
  document.getElementById("questionForm");

const userName =
  document.getElementById("userName");

const questionTopic =
  document.getElementById("questionTopic");

const userQuestion =
  document.getElementById("userQuestion");

const installAppButton =
  document.getElementById("installAppButton");

const helpButton =
  document.getElementById("helpButton");

const helpModal =
  document.getElementById("helpModal");

const closeHelpModal =
  document.getElementById("closeHelpModal");

const understoodButton =
  document.getElementById("understoodButton");

const toast =
  document.getElementById("toast");

const navigationButtons =
  document.querySelectorAll(".nav-button");

const currentYear =
  document.getElementById("currentYear");


/* =========================================================
   INICIO DE LA APLICACIÓN
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
});

function initializeApp() {
  setCurrentYear();
  restoreSelectedCondition();
  updateCondition(selectedCondition);
  updateClearSearchButton();
  updateInstallButton();

  bindConditionEvents();
  bindSearchEvents();
  bindFrequentFoods();
  bindResultEvents();
  bindQuestionForm();
  bindHelpModal();
  bindNavigation();
  bindInstallEvents();

  registerServiceWorker();
}


/* =========================================================
   AÑO ACTUAL
   ========================================================= */

function setCurrentYear() {
  if (currentYear) {
    currentYear.textContent =
      new Date().getFullYear();
  }
}


/* =========================================================
   CONDICIONES DE SALUD
   ========================================================= */

function bindConditionEvents() {
  conditionTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const condition =
        tab.dataset.condition;

      updateCondition(condition);
    });
  });
}

function updateCondition(condition) {
  if (!window.conditionConfig?.[condition]) {
    condition = "kidney";
  }

  selectedCondition = condition;

  localStorage.setItem(
    STORAGE_KEYS.selectedCondition,
    selectedCondition
  );

  const config =
    window.conditionConfig[selectedCondition];

  conditionTabs.forEach((tab) => {
    const isActive =
      tab.dataset.condition === selectedCondition;

    tab.classList.toggle(
      "active",
      isActive
    );

    tab.setAttribute(
      "aria-selected",
      String(isActive)
    );
  });

  if (heroBadge) {
    heroBadge.textContent =
      config.badge;
  }

  if (heroTitle) {
    heroTitle.textContent =
      config.title;
  }

  if (heroDescription) {
    heroDescription.textContent =
      config.description;
  }

  updateHeroColor(selectedCondition);

  if (currentFood) {
    renderFoodResult(currentFood);
  }
}

function restoreSelectedCondition() {
  const storedCondition =
    localStorage.getItem(
      STORAGE_KEYS.selectedCondition
    );

  if (
    storedCondition &&
    window.conditionConfig?.[storedCondition]
  ) {
    selectedCondition = storedCondition;
  }
}

function updateHeroColor(condition) {
  if (!heroSection) {
    return;
  }

  if (condition === "kidney") {
    heroSection.style.background =
      "linear-gradient(145deg, #123f32 0%, #1f6a52 60%, #2d8063 100%)";
  }

  if (condition === "liver") {
    heroSection.style.background =
      "linear-gradient(145deg, #9f4763 0%, #c86482 58%, #df8ca2 100%)";
  }

  if (condition === "prostate") {
    heroSection.style.background =
      "linear-gradient(145deg, #285d9e 0%, #3f78be 58%, #6599d8 100%)";
  }

  const themeColor =
    window.conditionConfig[condition].color;

  let themeMeta =
    document.querySelector(
      'meta[name="theme-color"]'
    );

  if (themeMeta) {
    themeMeta.setAttribute(
      "content",
      themeColor
    );
  }
}


/* =========================================================
   BUSCADOR
   ========================================================= */

function bindSearchEvents() {
  if (!foodSearch) {
    return;
  }

  foodSearch.addEventListener(
    "input",
    handleSearchInput
  );

  foodSearch.addEventListener(
    "keydown",
    handleSearchKeydown
  );

  foodSearch.addEventListener(
    "focus",
    () => {
      if (foodSearch.value.trim()) {
        showSuggestions(
          foodSearch.value
        );
      }
    }
  );

  clearSearchButton?.addEventListener(
    "click",
    clearSearch
  );

  document.addEventListener(
    "click",
    handleOutsideSuggestionClick
  );
}

function handleSearchInput() {
  updateClearSearchButton();

  const searchText =
    foodSearch.value.trim();

  if (!searchText) {
    clearSuggestions();
    hideResult();
    return;
  }

  showSuggestions(searchText);
}

function handleSearchKeydown(event) {
  if (event.key !== "Enter") {
    return;
  }

  event.preventDefault();

  const searchText =
    foodSearch.value.trim();

  if (!searchText) {
    return;
  }

  const exactFood =
    window.findFood(searchText);

  if (exactFood) {
    selectFood(exactFood);
    return;
  }

  const suggestions =
    window.getFoodSuggestions(
      searchText,
      1
    );

  if (suggestions.length > 0) {
    selectFood(suggestions[0]);
  } else {
    showFoodNotFound(searchText);
  }
}

function showSuggestions(searchText) {
  if (!searchSuggestions) {
    return;
  }

  const suggestions =
    window.getFoodSuggestions(
      searchText,
      6
    );

  searchSuggestions.innerHTML = "";

  if (suggestions.length === 0) {
    const noResult =
      document.createElement("button");

    noResult.type = "button";
    noResult.className =
      "suggestion-item";

    noResult.innerHTML = `
      <strong>No encontramos ese alimento</strong>
      <span>Pregúntale a René</span>
    `;

    noResult.addEventListener(
      "click",
      () => {
        prepareUnknownFoodQuestion(
          searchText
        );
      }
    );

    searchSuggestions.appendChild(
      noResult
    );

    return;
  }

  suggestions.forEach((food) => {
    const button =
      document.createElement("button");

    button.type = "button";
    button.className =
      "suggestion-item";

    button.innerHTML = `
      <strong>
        ${escapeHtml(food.emoji)}
        ${escapeHtml(food.name)}
      </strong>

      <span>
        Ver información
      </span>
    `;

    button.addEventListener(
      "click",
      () => {
        selectFood(food);
      }
    );

    searchSuggestions.appendChild(
      button
    );
  });
}

function selectFood(food) {
  if (!food) {
    return;
  }

  currentFood = food;

  foodSearch.value = food.name;

  updateClearSearchButton();
  clearSuggestions();
  renderFoodResult(food);

  resultSection?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function renderFoodResult(food) {
  const conditionInformation =
    food[selectedCondition];

  if (!conditionInformation) {
    return;
  }

  const conditionConfig =
    window.conditionConfig[
      selectedCondition
    ];

  if (resultConditionBadge) {
    resultConditionBadge.textContent =
      conditionConfig.name;

    resultConditionBadge.classList.remove(
      "liver",
      "prostate"
    );

    if (selectedCondition === "liver") {
      resultConditionBadge.classList.add(
        "liver"
      );
    }

    if (
      selectedCondition === "prostate"
    ) {
      resultConditionBadge.classList.add(
        "prostate"
      );
    }
  }

  if (resultFoodName) {
    resultFoodName.textContent =
      `${food.emoji} ${food.name}`;
  }

  if (resultStatus) {
    resultStatus.textContent =
      conditionInformation.statusLabel;

    resultStatus.classList.remove(
      "good",
      "moderate",
      "caution"
    );

    resultStatus.classList.add(
      conditionInformation.status
    );
  }

  if (resultSummary) {
    resultSummary.textContent =
      conditionInformation.summary;
  }

  if (resultBenefits) {
    resultBenefits.textContent =
      conditionInformation.benefits;
  }

  if (resultWarning) {
    resultWarning.textContent =
      conditionInformation.warning;
  }

  if (resultPortion) {
    resultPortion.textContent =
      conditionInformation.portion;
  }

  updateFavoriteButton();

  resultSection?.classList.remove(
    "hidden"
  );

  emptyState?.classList.add(
    "hidden"
  );
}

function hideResult() {
  currentFood = null;

  resultSection?.classList.add(
    "hidden"
  );

  emptyState?.classList.remove(
    "hidden"
  );
}

function showFoodNotFound(searchText) {
  clearSuggestions();

  showToast(
    `No encontramos “${searchText}”. Puedes enviar tu pregunta a René.`,
    "error"
  );

  prepareUnknownFoodQuestion(
    searchText
  );
}

function prepareUnknownFoodQuestion(
  searchText
) {
  clearSuggestions();

  if (questionTopic) {
    questionTopic.value =
      getConditionTopic(
        selectedCondition
      );
  }

  if (userQuestion) {
    userQuestion.value =
      `Hola René, busqué el alimento “${searchText}” en la app y no apareció. ¿Podrías orientarme sobre si puedo consumirlo y qué cantidad sería recomendable?`;
  }

  document
    .getElementById("askReneSection")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  setTimeout(() => {
    userQuestion?.focus();
  }, 650);
}

function clearSearch() {
  if (foodSearch) {
    foodSearch.value = "";
    foodSearch.focus();
  }

  clearSuggestions();
  hideResult();
  updateClearSearchButton();
}

function clearSuggestions() {
  if (searchSuggestions) {
    searchSuggestions.innerHTML = "";
  }
}

function updateClearSearchButton() {
  if (
    !foodSearch ||
    !clearSearchButton
  ) {
    return;
  }

  const hasText =
    foodSearch.value.trim().length > 0;

  clearSearchButton.classList.toggle(
    "visible",
    hasText
  );
}

function handleOutsideSuggestionClick(
  event
) {
  const searchSection =
    document.querySelector(
      ".search-section"
    );

  if (
    searchSection &&
    !searchSection.contains(
      event.target
    )
  ) {
    clearSuggestions();
  }
}


/* =========================================================
   ALIMENTOS FRECUENTES
   ========================================================= */

function bindFrequentFoods() {
  frequentFoods?.addEventListener(
    "click",
    (event) => {
      const chip =
        event.target.closest(
          "[data-food]"
        );

      if (!chip) {
        return;
      }

      const foodName =
        chip.dataset.food;

      const food =
        window.findFood(foodName);

      if (food) {
        selectFood(food);
      }
    }
  );
}


/* =========================================================
   FAVORITOS
   ========================================================= */

function bindResultEvents() {
  favoriteButton?.addEventListener(
    "click",
    toggleCurrentFavorite
  );

  askAboutFoodButton?.addEventListener(
    "click",
    prepareCurrentFoodQuestion
  );
}

function getFavorites() {
  try {
    const storedFavorites =
      localStorage.getItem(
        STORAGE_KEYS.favorites
      );

    if (!storedFavorites) {
      return [];
    }

    const parsedFavorites =
      JSON.parse(storedFavorites);

    return Array.isArray(
      parsedFavorites
    )
      ? parsedFavorites
      : [];
  } catch (error) {
    console.error(
      "No se pudieron leer los favoritos:",
      error
    );

    return [];
  }
}

function saveFavorites(favorites) {
  localStorage.setItem(
    STORAGE_KEYS.favorites,
    JSON.stringify(favorites)
  );
}

function isCurrentFoodFavorite() {
  if (!currentFood) {
    return false;
  }

  return getFavorites().includes(
    currentFood.id
  );
}

function toggleCurrentFavorite() {
  if (!currentFood) {
    return;
  }

  const favorites =
    getFavorites();

  const foodIndex =
    favorites.indexOf(
      currentFood.id
    );

  if (foodIndex >= 0) {
    favorites.splice(
      foodIndex,
      1
    );

    showToast(
      `${currentFood.name} fue eliminado de guardados.`
    );
  } else {
    favorites.push(
      currentFood.id
    );

    showToast(
      `${currentFood.name} fue guardado.`,
      "success"
    );
  }

  saveFavorites(favorites);
  updateFavoriteButton();
}

function updateFavoriteButton() {
  if (
    !favoriteButton ||
    !currentFood
  ) {
    return;
  }

  const isFavorite =
    isCurrentFoodFavorite();

  favoriteButton.classList.toggle(
    "saved",
    isFavorite
  );

  favoriteButton.textContent =
    isFavorite ? "♥" : "♡";

  favoriteButton.setAttribute(
    "aria-label",
    isFavorite
      ? "Eliminar alimento de guardados"
      : "Guardar alimento"
  );
}

function showFavoritesView() {
  removeTemporaryPanels();

  const favorites =
    getFavorites();

  const panel =
    document.createElement("section");

  panel.className =
    "favorites-panel temporary-panel";

  panel.innerHTML = `
    <div class="section-heading-row">
      <h2>Alimentos guardados</h2>
      <span>${favorites.length} guardados</span>
    </div>

    <div class="favorites-list"></div>
  `;

  const favoritesList =
    panel.querySelector(
      ".favorites-list"
    );

  if (favorites.length === 0) {
    favoritesList.innerHTML = `
      <div class="favorites-empty">
        <strong>
          Todavía no tienes alimentos guardados
        </strong>

        Busca un alimento y toca el corazón para guardarlo.
      </div>
    `;
  } else {
    favorites.forEach((foodId) => {
      const food =
        window.foodDatabase.find(
          (item) => item.id === foodId
        );

      if (!food) {
        return;
      }

      const card =
        document.createElement(
          "article"
        );

      card.className =
        "favorite-food-card";

      card.innerHTML = `
        <div class="favorite-food-main">
          <div class="favorite-food-icon">
            ${escapeHtml(food.emoji)}
          </div>

          <div class="favorite-food-text">
            <h3>${escapeHtml(food.name)}</h3>
            <p>
              Información para
              ${escapeHtml(
                window.conditionConfig[
                  selectedCondition
                ].name
              )}
            </p>
          </div>
        </div>

        <div class="favorite-food-actions">
          <button
            class="favorite-open-button"
            type="button"
            aria-label="Abrir alimento"
          >
            →
          </button>

          <button
            class="favorite-remove-button"
            type="button"
            aria-label="Eliminar de guardados"
          >
            ×
          </button>
        </div>
      `;

      card
        .querySelector(
          ".favorite-open-button"
        )
        .addEventListener(
          "click",
          () => {
            selectFood(food);
          }
        );

      card
        .querySelector(
          ".favorite-remove-button"
        )
        .addEventListener(
          "click",
          () => {
            removeFavorite(food.id);
            showFavoritesView();
          }
        );

      favoritesList.appendChild(
        card
      );
    });
  }

  const conditionSection =
    document.querySelector(
      ".condition-section"
    );

  conditionSection?.insertAdjacentElement(
    "afterend",
    panel
  );

  panel.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function removeFavorite(foodId) {
  const favorites =
    getFavorites().filter(
      (id) => id !== foodId
    );

  saveFavorites(favorites);

  if (
    currentFood &&
    currentFood.id === foodId
  ) {
    updateFavoriteButton();
  }

  showToast(
    "El alimento fue eliminado de guardados."
  );
}

function removeTemporaryPanels() {
  document
    .querySelectorAll(
      ".temporary-panel"
    )
    .forEach((panel) => {
      panel.remove();
    });
}


/* =========================================================
   PREGUNTAR SOBRE EL ALIMENTO
   ========================================================= */

function prepareCurrentFoodQuestion() {
  if (!currentFood) {
    return;
  }

  const conditionName =
    window.conditionConfig[
      selectedCondition
    ].name;

  if (questionTopic) {
    questionTopic.value =
      getConditionTopic(
        selectedCondition
      );
  }

  if (userQuestion) {
    userQuestion.value =
      `Hola René, consulté “${currentFood.name}” en la Mini App de Salud para el tema de ${conditionName}. Me gustaría saber si hay algo más que debería tomar en cuenta según mi situación.`;
  }

  document
    .getElementById("askReneSection")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  setTimeout(() => {
    userQuestion?.focus();
  }, 650);
}

function getConditionTopic(condition) {
  const topicMap = {
    kidney: "Riñones",
    liver: "Hígado graso",
    prostate: "Próstata"
  };

  return topicMap[condition] || "Otro";
}


/* =========================================================
   FORMULARIO Y WHATSAPP
   ========================================================= */

function bindQuestionForm() {
  questionForm?.addEventListener(
    "submit",
    handleQuestionSubmit
  );
}

function handleQuestionSubmit(event) {
  event.preventDefault();

  const name =
    sanitizeSingleLine(
      userName?.value
    );

  const topic =
    questionTopic?.value || "";

  const question =
    userQuestion?.value.trim() || "";

  if (!topic) {
    showToast(
      "Selecciona el tema de tu pregunta.",
      "error"
    );

    questionTopic?.focus();
    return;
  }

  if (!question) {
    showToast(
      "Escribe tu pregunta antes de continuar.",
      "error"
    );

    userQuestion?.focus();
    return;
  }

  const messageLines = [
    "Hola René Auren 👋",
    "",
    "Tengo una consulta desde la Mini App de Salud."
  ];

  if (name) {
    messageLines.push("");
    messageLines.push(
      `Mi nombre es: ${name}`
    );
  }

  messageLines.push("");
  messageLines.push(
    `Tema: ${topic}`
  );

  messageLines.push("");
  messageLines.push(
    "Mi pregunta:"
  );

  messageLines.push(question);

  messageLines.push("");
  messageLines.push(
    "Entiendo que esta orientación es educativa y no sustituye una consulta médica."
  );

  const encodedMessage =
    encodeURIComponent(
      messageLines.join("\n")
    );

  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  showToast(
    "Abriendo WhatsApp con tu pregunta preparada...",
    "success"
  );

  setTimeout(() => {
    window.location.href =
      whatsappUrl;
  }, 500);
}


/* =========================================================
   MODAL DE AYUDA
   ========================================================= */

function bindHelpModal() {
  helpButton?.addEventListener(
    "click",
    openHelpModal
  );

  closeHelpModal?.addEventListener(
    "click",
    closeHelp
  );

  understoodButton?.addEventListener(
    "click",
    closeHelp
  );

  helpModal?.addEventListener(
    "click",
    (event) => {
      if (event.target === helpModal) {
        closeHelp();
      }
    }
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key === "Escape" &&
        !helpModal?.classList.contains(
          "hidden"
        )
      ) {
        closeHelp();
      }
    }
  );
}

function openHelpModal() {
  helpModal?.classList.remove(
    "hidden"
  );

  document.body.style.overflow =
    "hidden";

  closeHelpModal?.focus();
}

function closeHelp() {
  helpModal?.classList.add(
    "hidden"
  );

  document.body.style.overflow =
    "";

  helpButton?.focus();
}


/* =========================================================
   NAVEGACIÓN INFERIOR
   ========================================================= */

function bindNavigation() {
  navigationButtons.forEach(
    (button) => {
      button.addEventListener(
        "click",
        () => {
          const section =
            button.dataset.section;

          setActiveNavigation(
            button
          );

          handleNavigationSection(
            section
          );
        }
      );
    }
  );
}

function setActiveNavigation(
  activeButton
) {
  navigationButtons.forEach(
    (button) => {
      button.classList.toggle(
        "active",
        button === activeButton
      );
    }
  );
}

function handleNavigationSection(
  section
) {
  if (section === "home") {
    removeTemporaryPanels();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  if (section === "search") {
    removeTemporaryPanels();

    document
      .querySelector(
        ".search-section"
      )
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    setTimeout(() => {
      foodSearch?.focus();
    }, 600);
  }

  if (section === "favorites") {
    showFavoritesView();
  }

  if (section === "profile") {
    removeTemporaryPanels();

    document
      .getElementById(
        "askReneSection"
      )
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
  }
}


/* =========================================================
   INSTALACIÓN DE LA APP
   ========================================================= */

function bindInstallEvents() {
  window.addEventListener(
    "beforeinstallprompt",
    (event) => {
      event.preventDefault();

      deferredInstallPrompt =
        event;

      updateInstallButton();
    }
  );

  installAppButton?.addEventListener(
    "click",
    installApplication
  );

  window.addEventListener(
    "appinstalled",
    () => {
      deferredInstallPrompt = null;

      if (installAppButton) {
        installAppButton.textContent =
          "App instalada";

        installAppButton.disabled =
          true;
      }

      showToast(
        "La Mini App de Salud fue instalada correctamente.",
        "success"
      );
    }
  );
}

async function installApplication() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();

    const choiceResult =
      await deferredInstallPrompt.userChoice;

    if (
      choiceResult.outcome ===
      "accepted"
    ) {
      showToast(
        "La app se está agregando a tu pantalla.",
        "success"
      );
    }

    deferredInstallPrompt = null;
    updateInstallButton();
    return;
  }

  const isIos =
    /iphone|ipad|ipod/i.test(
      navigator.userAgent
    );

  if (isIos) {
    showToast(
      "En iPhone: abre esta página en Safari, toca Compartir y selecciona “Agregar a pantalla de inicio”."
    );
  } else {
    showToast(
      "Abre el menú del navegador y selecciona “Instalar aplicación” o “Agregar a pantalla principal”."
    );
  }
}

function updateInstallButton() {
  if (!installAppButton) {
    return;
  }

  const isStandalone =
    window.matchMedia(
      "(display-mode: standalone)"
    ).matches ||
    window.navigator.standalone === true;

  if (isStandalone) {
    installAppButton.textContent =
      "App instalada";

    installAppButton.disabled =
      true;

    return;
  }

  installAppButton.textContent =
    "Agregar a mi pantalla";

  installAppButton.disabled =
    false;
}


/* =========================================================
   SERVICE WORKER
   ========================================================= */

function registerServiceWorker() {
  if (
    !("serviceWorker" in navigator)
  ) {
    return;
  }

  window.addEventListener(
    "load",
    async () => {
      try {
        await navigator.serviceWorker.register(
          "./service-worker.js"
        );

        console.log(
          "Service Worker registrado correctamente."
        );
      } catch (error) {
        console.warn(
          "No se pudo registrar el Service Worker:",
          error
        );
      }
    }
  );
}


/* =========================================================
   MENSAJES FLOTANTES
   ========================================================= */

function showToast(
  message,
  type = ""
) {
  if (!toast) {
    return;
  }

  clearTimeout(toastTimer);

  toast.textContent = message;

  toast.classList.remove(
    "error",
    "success"
  );

  if (type) {
    toast.classList.add(type);
  }

  toast.classList.add("show");

  toastTimer = setTimeout(() => {
    toast.classList.remove(
      "show"
    );
  }, 4300);
}


/* =========================================================
   FUNCIONES DE SEGURIDAD Y TEXTO
   ========================================================= */

function sanitizeSingleLine(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
const scenarioConfigs = {
  "直播間素材": {
    fields: [
      ["activityName", "活動名稱", "input", "例如：樂享首單包賠"],
      ["activityPeriod", "活動期間", "input", "例如：06/13 - 06/14"],
      ["mainTitle", "主標題", "input", "活動主標"],
      ["subTitle", "副標題", "input", "活動副標"],
      ["copy", "活動文案", "textarea", "請貼上要放進素材的文案"],
      ["rules", "活動規則", "textarea", "參與方式、限制、派獎規則"],
      ["rewards", "獎勵內容", "textarea", "獎項、金額、名額"]
    ],
    checks: ["Banner", "浮窗", "活動彈窗", "直播間活動圖片", "其他"]
  },
  "代理": {
    fields: [
      ["promoPurpose", "推廣用途", "input", "例如：市場洽聊圖"],
      ["channel", "代理渠道 / 使用場景", "input", "例如：代理後台、社群"],
      ["mainCopy", "主文案", "textarea", "主要文字"],
      ["subCopy", "副文案", "textarea", "補充文字"],
      ["replaceContent", "需替換內容", "textarea", "人物、日期、活動名稱等"]
    ],
    checks: ["推廣圖", "維護素材", "人物替換", "活動圖", "其他"]
  },
  "直播間封面": {
    fields: [
      ["hostInfo", "主播 / 場次 / 房間類型", "input", "例如：娜娜 / 大尺直播"],
      ["coverType", "封面類型", "input", "主播 / 客服 / 骰寶 / 活動"],
      ["coverCopy", "封面文案", "textarea", "封面上要放的文字"],
      ["orientation", "橫版 / 竪版", "input", "橫版、竪版或兩者都要"],
      ["pairWithBackdrop", "是否與背板成套", "input", "否 / 是"]
    ],
    checks: ["主播封面", "客服封面", "骰寶封面", "活動封面", "其他"]
  },
  "直播間背板": {
    fields: [
      ["hostInfo", "主播 / 場次 / 房間類型", "input", "例如：性感野玫瑰"],
      ["backdropCopy", "背板文案", "textarea", "背板上要放的文字"],
      ["backdropSize", "背板尺寸", "input", "例如：1425 x 800"],
      ["sameStyle", "是否與封面共用風格", "input", "否 / 是"]
    ],
    checks: ["橫版背板", "竪屏背板", "活動背板", "其他"]
  },
  "活動": {
    fields: [
      ["activityName", "活動名稱", "input", "例如：世界盃新人專屬福利"],
      ["mainTitle", "活動主標題", "input", "活動主標"],
      ["subTitle", "活動副標題", "input", "活動副標"],
      ["activityPeriod", "活動期間", "input", "例如：06/12 - 07/20"],
      ["rules", "活動規則", "textarea", "活動規則完整內容"],
      ["rewards", "獎勵內容", "textarea", "獎金、派獎、限制"],
      ["needsDev", "是否需要技術開發", "input", "否 / 是"]
    ],
    checks: [
      "分享彈窗",
      "PC 首頁輪播圖",
      "爆料輪播圖",
      "朋友圈 PYQ",
      "APP 浮窗",
      "直播間活動圖片",
      "活動模板圖",
      "H5 Banner",
      "PC Banner",
      "PC 端活動頁展示圖"
    ]
  },
  "僅活動配置圖": {
    fields: [
      ["activityName", "活動名稱", "input", "例如：好友邀請加碼"],
      ["configList", "配置圖檔名清單", "textarea", "逐行列出檔名或版位"],
      ["version", "需套用版本", "input", "版本一 / 版本二 / 都要"],
      ["sizeSpec", "尺寸規範", "textarea", "依照哪份規範或列出尺寸"],
      ["adjustment", "調整說明", "textarea", "需修改、保留、強調的內容"]
    ],
    checks: ["新增配置圖", "調整配置圖", "換皮", "批量處理"]
  },
  "燈牌": {
    fields: [
      ["badgeName", "燈牌名稱", "input", "例如：國家隊燈牌"],
      ["target", "對應主播 / 球員 / 隊伍", "input", "例如：阿根廷"],
      ["badgeCopy", "燈牌文案", "textarea", "燈牌文字"],
      ["reuseStyle", "是否沿用既有版型", "input", "否 / 是"],
      ["sizeSpec", "尺寸規範", "input", "若有固定尺寸請填"]
    ],
    checks: ["主播燈牌", "球員燈牌", "國家隊燈牌", "活動燈牌", "其他"]
  },
  "彈窗": {
    fields: [
      ["popupPurpose", "彈窗用途", "input", "例如：存送活動彈窗"],
      ["trigger", "觸發時機", "input", "例如：登入後、點擊活動入口"],
      ["popupTitle", "標題", "input", "彈窗標題"],
      ["popupCopy", "內容文案", "textarea", "彈窗內容"],
      ["buttonCopy", "按鈕文案", "input", "例如：立即參加"],
      ["sizeSpec", "尺寸 / 樣式參考", "input", "尺寸或參考圖"]
    ],
    checks: ["活動彈窗", "提示彈窗", "存送彈窗", "其他"]
  },
  "其他": {
    fields: [
      ["goal", "需求目標", "textarea", "請說明需要達成的結果"],
      ["scope", "需求範圍", "textarea", "包含與不包含的內容"],
      ["sizeSpec", "尺寸 / 格式", "input", "若有固定尺寸請填"]
    ],
    checks: ["圖片", "頁面", "調整", "其他"]
  }
};

const form = document.querySelector("#ticketForm");
const scenarioSelect = document.querySelector("#scenario");
const scenarioFields = document.querySelector("#scenarioFields");
const summaryPreview = document.querySelector("#summaryPreview");
const descriptionPreview = document.querySelector("#descriptionPreview");
const projectPreview = document.querySelector("#projectPreview");
const dueDatePreview = document.querySelector("#dueDatePreview");
const issueTypePreview = document.querySelector("#issueTypePreview");
const missingList = document.querySelector("#missingList");
const validationBox = document.querySelector("#validationBox");
const completion = document.querySelector("#completion");
const submitButton = document.querySelector("#submitTicket");
const resultBox = document.querySelector("#resultBox");
const ticketKey = document.querySelector("#ticketKey");
const ticketUrl = document.querySelector("#ticketUrl");
const referenceFiles = document.querySelector("#referenceFiles");
const fileList = document.querySelector("#fileList");
const backupStatus = document.querySelector("#backupStatus");
const GOOGLE_SHEET_BACKUP_URL = "https://script.google.com/macros/s/AKfycbxwD97TG6Jc3yDC-Ps7XqfSaK-ngzG19oKl8yHd466Z_-ZtzBi55ttOQ8SlzwJlgfAZIA/exec";

function value(name) {
  return new FormData(form).get(name)?.toString().trim() || "";
}

function selectedFiles() {
  return [...(referenceFiles?.files || [])];
}

function outputItems() {
  return [...form.querySelectorAll(".output-row")].map((row) => ({
    item: row.querySelector("[name='outputItem[]']")?.value.trim() || "",
    size: row.querySelector("[name='outputSize[]']")?.value.trim() || ""
  }));
}

function completedOutputItems() {
  return outputItems().filter((output) => output.item && output.size);
}

function createOutputRow(item = "", size = "") {
  return `
    <div class="output-row">
      <label>
        <span>項目</span>
        <input name="outputItem[]" value="${item}" placeholder="例如：Banner、浮窗、直播間活動圖片" />
      </label>
      <label>
        <span>尺寸</span>
        <input name="outputSize[]" value="${size}" placeholder="例如：1920 x 720" />
      </label>
      <button class="remove-output-button" type="button" aria-label="移除項目">移除</button>
    </div>
  `;
}

function outputItemsText() {
  const outputs = completedOutputItems();
  if (outputs.length === 0) return "";
  return outputs.map((output, index) => `${index + 1}. ${output.item || "未填項目"}｜${output.size || "未填尺寸"}`).join("\n");
}

function formatBytes(bytes) {
  if (!bytes) return "0 KB";
  const units = ["B", "KB", "MB", "GB"];
  let size = bytes;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex += 1;
  }
  return `${size.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}

function renderFileList() {
  const files = selectedFiles();
  if (!fileList) return;

  if (files.length === 0) {
    fileList.innerHTML = "<li>尚未選擇檔案</li>";
    return;
  }

  fileList.innerHTML = files
    .map((file) => `<li>${file.name} <span>(${formatBytes(file.size)})</span></li>`)
    .join("");
}

function renderScenarioFields() {
  const config = scenarioConfigs[scenarioSelect.value] || scenarioConfigs["其他"];
  const fieldHtml = config.fields
    .map(([name, label, type, placeholder]) => {
      if (type === "textarea") {
        return `<label><span>${label}</span><textarea name="${name}" rows="3" placeholder="${placeholder}"></textarea></label>`;
      }
      return `<label><span>${label}</span><input name="${name}" placeholder="${placeholder}" /></label>`;
    })
    .join("");

  const suggestionText = config.checks.join("、");

  scenarioFields.innerHTML = `
    <div class="output-builder">
      <div class="output-heading">
        <div>
          <strong>預期產出</strong>
          <p>每個項目請填名稱和尺寸。常見項目：${suggestionText}</p>
        </div>
        <button class="add-output-button" id="addOutputItem" type="button">新增項目</button>
      </div>
      <div class="output-list" id="outputList">
        ${createOutputRow()}
      </div>
    </div>
    ${fieldHtml}
  `;
}

function projectKey(platform, scenario) {
  if (scenario === "活動" && value("needsDev") === "是") return "UD";
  if (platform === "YY") return "YY1";
  if (platform === "BB") return "BB1";
  return "UD";
}

function issueType(scenario) {
  return scenario === "活動" && value("needsDev") === "是" ? "Story" : "Task";
}

function jiraSummary() {
  const platform = value("platform") || "平台";
  const scenario = value("scenario") || "需求場景";
  const type = value("requestType") || "類型";
  const title = value("title") || "需求抬頭";
  return `[${platform}][${scenario}][${type}] ${title}`;
}

function scenarioDescription() {
  const config = scenarioConfigs[value("scenario")] || scenarioConfigs["其他"];
  const lines = [];

  lines.push("【場景明細】");
  for (const [name, label] of config.fields) {
    lines.push(`${label}：${value(name)}`);
  }
  lines.push(`預期產出：\n${outputItemsText()}`);
  return lines.join("\n");
}

function jiraDescription() {
  return `【基本資訊】
需求人：${value("requester")}
單位：${value("department")}
平台：${value("platform")}
需求類型：${value("requestType")}
需求場景：${value("scenario")}
優先級：${value("priority")}

【需求摘要】
需求抬頭：${value("title")}
需求說明：${value("summary")}
預期產出：
${outputItemsText()}
張數：${value("quantity")}

${scenarioDescription()}

【交付時間】
期望 UI 交付日期：${value("uiDueDate")}
期望功能上線日：${value("onlineDate")}

【參考資料】
素材 / 附件：${value("assetLink")}
參考舊圖 / 舊活動：${value("legacyRef")}
Figma：${value("figmaLink")}
相關 Jira：${value("relatedJira")}
已選參考檔案：${selectedFiles().map((file) => file.name).join("、")}

【備註】
${value("notes")}`;
}

function backupRecord(key, url) {
  const project = projectKey(value("platform"), value("scenario"));
  const type = issueType(value("scenario"));
  return {
    submittedAt: new Date().toISOString(),
    jiraKey: key,
    jiraUrl: url,
    project,
    issueType: type,
    summary: jiraSummary(),
    requester: value("requester"),
    department: value("department"),
    platform: value("platform"),
    requestType: value("requestType"),
    scenario: value("scenario"),
    priority: value("priority"),
    title: value("title"),
    quantity: value("quantity"),
    uiDueDate: value("uiDueDate"),
    onlineDate: value("onlineDate"),
    requestSummary: value("summary"),
    outputItems: outputItemsText(),
    scenarioDetail: scenarioDescription(),
    assetLink: value("assetLink"),
    figmaLink: value("figmaLink"),
    relatedJira: value("relatedJira"),
    legacyRef: value("legacyRef"),
    selectedFiles: selectedFiles().map((file) => file.name).join("、"),
    notes: value("notes")
  };
}

async function backupToGoogleSheet(record) {
  if (!GOOGLE_SHEET_BACKUP_URL) {
    backupStatus.textContent = "備份狀態：待建立 Google Sheet 寫入權限";
    return;
  }

  backupStatus.textContent = "備份狀態：送出中...";

  try {
    await fetch(GOOGLE_SHEET_BACKUP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(record)
    });
    backupStatus.textContent = "備份狀態：已送出到 Google Sheet，請到表格確認";
  } catch (error) {
    backupStatus.textContent = `備份狀態：送出失敗，${error.message}`;
  }
}

function missingFields() {
  const required = [
    ["requester", "需求人"],
    ["department", "單位"],
    ["platform", "平台"],
    ["requestType", "需求類型"],
    ["title", "需求抬頭"],
    ["scenario", "需求場景"],
    ["quantity", "張數"],
    ["uiDueDate", "期望 UI 交付日期"],
    ["summary", "需求說明"]
  ];

  const missing = required.filter(([name]) => !value(name)).map(([, label]) => label);
  if (completedOutputItems().length === 0) missing.push("預期產出項目與尺寸");
  return missing;
}

function updatePreview() {
  const platform = value("platform");
  const scenario = value("scenario");
  const project = projectKey(platform, scenario);
  const type = issueType(scenario);
  const missing = missingFields();
  const total = 10;
  const done = Math.max(0, total - missing.length);
  const percent = Math.round((done / total) * 100);

  projectPreview.textContent = project;
  issueTypePreview.textContent = type;
  dueDatePreview.textContent = value("uiDueDate") || "-";
  summaryPreview.value = jiraSummary();
  descriptionPreview.value = jiraDescription();
  completion.textContent = `${percent}% 完成`;
  completion.classList.toggle("done", missing.length === 0);

  missingList.innerHTML = "";
  if (missing.length === 0) {
    validationBox.classList.add("is-ok");
    validationBox.querySelector("strong").textContent = "可以建立";
    missingList.innerHTML = "<li>必填欄位已完整</li>";
  } else {
    validationBox.classList.remove("is-ok");
    validationBox.querySelector("strong").textContent = "待補欄位";
    missing.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      missingList.appendChild(li);
    });
  }

  submitButton.disabled = missing.length > 0;
  resultBox.hidden = true;
}

function fillSample() {
  const sample = {
    requester: "Annie",
    department: "運營",
    platform: "BB",
    requestType: "新增",
    title: "0704-05樂享-首單包賠",
    scenario: "直播間素材",
    quantity: "3",
    priority: "一般",
    uiDueDate: "2026-06-30",
    onlineDate: "2026-07-04",
    summary: "製作 0704-05 樂享首單包賠活動素材，包含朋友圈、封面、活動彈窗。",
    assetLink: "",
    legacyRef: "參考 0704-05 樂享首單包賠原文檔",
    notes: "請依照活動資訊製作朋友圈、封面與活動彈窗。"
  };

  Object.entries(sample).forEach(([name, data]) => {
    const field = form.elements[name];
    if (field) field.value = data;
  });

  renderScenarioFields();
  const detailSample = {
    activityName: "0704-05樂享-首單包賠",
    activityPeriod: "2026-07-04 18:30 韓K聯 全北現代 - 江原FC\n2026-07-05 19:35 中超 上海申花 - 浙江隊",
    mainTitle: "你投注我買單 x 包賠100%",
    subTitle: "專屬稱號、流水返券、現金紅包",
    copy: "活動內容：\n限本場賽事，當日累計充值≥100且首單有效投注≥100，會員根據首單投注的負盈利可獲得100元的包賠彩金。\n\n活動流程：\n進入直播間 → 點擊左邊活動浮標 → 點擊【我要報名】，進線找客服登記。",
    rules: "1. 活動僅限BB體育，當日累計充值≥100且首單有效投注≥100，負盈利僅對首單已結算並產生全輸結果來進行計算。\n2. 串關、對沖、提前結算、港賠0.75 / 歐賠1.75以下的首單投注將不列入活動計算。\n3. 獎勵於比賽結束48小時內審核派發，取款僅需3倍流水。\n4. 每位用戶僅限一個帳號參與本次活動，並只限領取一次獎勵。\n5. 為避免理解差異，平台保留本活動最終解釋權。",
    rewards: "包賠金、專屬稱號、流水返券、現金紅包。"
  };

  Object.entries(detailSample).forEach(([name, data]) => {
    const field = form.elements[name];
    if (field) field.value = data;
  });

  const outputList = document.querySelector("#outputList");
  outputList.innerHTML = [
    createOutputRow("朋友圈", "375 x 812"),
    createOutputRow("封面", "165 x 95"),
    createOutputRow("活動彈窗", "323 x 482")
  ].join("");

  updatePreview();
}

async function simulateSubmit() {
  const project = projectKey(value("platform"), value("scenario"));
  const number = Math.floor(1000 + Math.random() * 9000);
  const key = `${project}-${number}`;
  const url = `https://jira-by88168.atlassian.net/browse/${key}`;
  ticketKey.textContent = key;
  ticketUrl.href = url;
  resultBox.hidden = false;
  await backupToGoogleSheet(backupRecord(key, url));
}

scenarioSelect.addEventListener("change", () => {
  renderScenarioFields();
  updatePreview();
});

scenarioFields.addEventListener("click", (event) => {
  if (event.target.closest("#addOutputItem")) {
    document.querySelector("#outputList").insertAdjacentHTML("beforeend", createOutputRow());
    updatePreview();
  }

  if (event.target.closest(".remove-output-button")) {
    const rows = [...document.querySelectorAll(".output-row")];
    if (rows.length > 1) {
      event.target.closest(".output-row").remove();
    } else {
      event.target.closest(".output-row").querySelectorAll("input").forEach((input) => {
        input.value = "";
      });
    }
    updatePreview();
  }
});

form.addEventListener("input", updatePreview);
form.addEventListener("change", updatePreview);
referenceFiles.addEventListener("change", () => {
  renderFileList();
  updatePreview();
});
document.querySelector("#loadSample").addEventListener("click", fillSample);
document.querySelector("#resetForm").addEventListener("click", () => {
  form.reset();
  renderFileList();
  renderScenarioFields();
  updatePreview();
});
submitButton.addEventListener("click", simulateSubmit);

renderScenarioFields();
renderFileList();
updatePreview();

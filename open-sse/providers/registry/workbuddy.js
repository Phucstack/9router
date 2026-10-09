export default {
  id: "workbuddy",
  priority: 80,
  alias: "wb",
  uiAlias: "wb",
  display: {
    name: "WorkBuddy AI",
    icon: "work",
    color: "#4A90E2",
    textIcon: "WB",
    website: "https://www.workbuddy.ai",
  },
  category: "oauth",
  authModes: ["oauth"],
  hasOAuth: true,
  transport: {
    baseUrl: "https://www.workbuddy.ai/v2/chat/completions",
    format: "openai",
    headers: {
      "X-Domain": "workbuddy.ai",
      "X-Product": "SaaS",
    },
    auth: {
      combined: true,
      header: "Authorization",
      scheme: "bearer",
    },
  },
  models: [
    { id: "deepseek-v4.1-flash", name: "DeepSeek V4.1 Flash" },
    { id: "deepseek-v4.1-flash-sg", name: "DeepSeek V4.1 Flash SG" },
    { id: "hy4-preview-f", name: "HY4 Preview F" },
    { id: "deepseek-v4-pro", name: "DeepSeek V4 Pro" },
  ],
  oauth: {
    appBaseUrl: "https://www.workbuddy.ai",
    apiBaseUrl: "https://www.workbuddy.ai",
  },
};

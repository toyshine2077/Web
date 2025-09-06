import React, { useState, useEffect } from "react";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isNewUser, setIsNewUser] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [avatar, setAvatar] = useState({
    name: "镜中我",
    gender: "neutral",
    ageStyle: "青年",
    hairstyle: "short",
    hairColor: "#8B5CF6",
    skinTone: "#FBCFE8",
    eyeColor: "#6366F1",
    outfit: "休闲",
    expression: "温暖",
    hasMicroExpressions: true,
  });

  const [conversationStyle, setConversationStyle] = useState({
    tone: "温柔倾听型",
    depth: 50,
    topics: ["情绪疏导", "自我认知"],
    pace: "缓慢深思",
    mirrorFeedback: true,
    recordForReport: true,
  });

  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // 模拟AI回复
  const simulateAIResponse = (userMessage) => {
    setIsTyping(true);
    setTimeout(() => {
      let response = "";
      const tone = conversationStyle.tone;
      
      if (tone === "温柔倾听型") {
        response = `我在这里，${avatar.name}正在温柔地倾听你。你刚才说"${userMessage}"，能多和我分享一些吗？`;
      } else if (tone === "理性分析型") {
        response = `从理性角度分析"${userMessage}"，我们可以这样思考：首先...其次...最后...`;
      } else if (tone === "幽默调侃型") {
        response = `哈哈，关于"${userMessage}"，我有个有趣的想法：如果把这个问题想象成一只跳舞的企鹅...`;
      } else if (tone === "哲学思辨型") {
        response = `"${userMessage}"...这让我思考存在的本质。我们为何会这样想？这背后反映了什么深层需求？`;
      } else if (tone === "激励教练型") {
        response = `太棒了！你提到"${userMessage}"，这正是成长的机会！我建议你这样做：1...2...3...`;
      }
      
      setMessages(prev => [...prev, { type: "ai", text: response, avatar: avatar.name }]);
      setIsTyping(false);
    }, 1500);
  };

  // 发送消息
  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage = { type: "user", text: inputText };
      setMessages(prev => [...prev, newMessage]);
      setInputText("");
      simulateAIResponse(inputText);
    }
  };

  // 保存形象设置
  const handleSaveAvatar = () => {
    setShowOnboarding(false);
    setIsNewUser(false);
    setCurrentPage("home");
  };

  // 保存对话风格设置
  const handleSaveStyle = () => {
    setCurrentPage("home");
  };

  // 渲染不同页面
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <div className="flex flex-col h-full bg-gradient-to-br from-purple-50 to-pink-50">
            {/* 人物形象展示区 */}
            <div 
              className="flex-1 flex flex-col items-center justify-center p-8 cursor-pointer"
              onClick={() => setCurrentPage("avatar")}
            >
              <div className="relative mb-4">
                <div 
                  className="w-48 h-48 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105"
                  style={{ 
                    background: `linear-gradient(135deg, ${avatar.hairColor}30, ${avatar.skinTone})`,
                    border: `4px solid ${avatar.hairColor}80`
                  }}
                >
                  <div className="text-6xl">👤</div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow text-sm font-medium">
                  {avatar.name}
                </div>
              </div>
              
              {/* 开始对话按钮 */}
              <button
                onClick={() => setCurrentPage("chat")}
                className="w-4/5 max-w-xs py-4 px-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl rounded-full shadow-lg transform transition hover:scale-105 active:scale-95"
              >
                开始对话
              </button>
            </div>

            {/* 导航栏 */}
            <div className="bg-white border-t border-gray-200 px-4 py-2 flex justify-around">
              <button 
                onClick={() => setCurrentPage("chat")}
                className="flex flex-col items-center py-2"
              >
                <div className="text-2xl mb-1">💬</div>
                <div className="text-xs">对话</div>
              </button>
              <button 
                onClick={() => setCurrentPage("avatar")}
                className="flex flex-col items-center py-2"
              >
                <div className="text-2xl mb-1">🧍</div>
                <div className="text-xs">形象</div>
              </button>
              <button 
                onClick={() => setCurrentPage("style")}
                className="flex flex-col items-center py-2"
              >
                <div className="text-2xl mb-1">⚙️</div>
                <div className="text-xs">对话风格</div>
              </button>
            </div>

            {/* 新用户引导蒙层 */}
            {showOnboarding && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-6 mx-4 max-w-sm text-center">
                  <h3 className="text-xl font-bold mb-4">欢迎来到镜中我</h3>
                  <p className="mb-6">点击人物形象，定制你的专属对话伙伴吧！</p>
                  <button
                    onClick={() => setCurrentPage("avatar")}
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg"
                  >
                    开始定制
                  </button>
                </div>
              </div>
            )}
          </div>
        );

      case "avatar":
        return (
          <div className="flex flex-col h-full bg-gray-50">
            {/* 顶部标题栏 */}
            <div className="bg-white p-4 shadow-sm">
              <h2 className="text-xl font-bold">定制你的镜中我</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <div className="flex flex-col md:flex-row gap-6">
                {/* 实时预览区 */}
                <div className="flex-1 flex flex-col items-center p-4 bg-white rounded-xl shadow">
                  <div 
                    className="w-40 h-40 rounded-full flex items-center justify-center mb-4 shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${avatar.hairColor}30, ${avatar.skinTone})`,
                      border: `3px solid ${avatar.hairColor}80`
                    }}
                  >
                    <div className="text-5xl">👤</div>
                  </div>
                  <input
                    type="text"
                    value={avatar.name}
                    onChange={(e) => setAvatar({...avatar, name: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded text-center font-medium"
                    placeholder="输入名字"
                  />
                </div>

                {/* 设置选项区 */}
                <div className="flex-1 space-y-6">
                  {/* 基础设定 */}
                  <div className="bg-white p-4 rounded-xl shadow">
                    <h3 className="font-bold mb-3">基础设定</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium mb-1">性别</label>
                        <div className="flex gap-2">
                          {["男", "女", "无性别", "自定义"].map(gender => (
                            <button
                              key={gender}
                              onClick={() => setAvatar({...avatar, gender})}
                              className={`px-3 py-1 rounded-full text-sm ${
                                avatar.gender === gender 
                                ? "bg-purple-500 text-white" 
                                : "bg-gray-200 text-gray-700"
                              }`}
                            >
                              {gender}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">年龄感</label>
                        <div className="flex gap-2">
                          {["少年", "青年", "成熟"].map(age => (
                            <button
                              key={age}
                              onClick={() => setAvatar({...avatar, ageStyle: age})}
                              className={`px-3 py-1 rounded-full text-sm ${
                                avatar.ageStyle === age 
                                ? "bg-purple-500 text-white" 
                                : "bg-gray-200 text-gray-700"
                              }`}
                            >
                              {age}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 外观定制 */}
                  <div className="bg-white p-4 rounded-xl shadow">
                    <h3 className="font-bold mb-3">外观定制</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium mb-1">发色</label>
                        <input
                          type="color"
                          value={avatar.hairColor}
                          onChange={(e) => setAvatar({...avatar, hairColor: e.target.value})}
                          className="w-full h-10 rounded"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">肤色</label>
                        <input
                          type="color"
                          value={avatar.skinTone}
                          onChange={(e) => setAvatar({...avatar, skinTone: e.target.value})}
                          className="w-full h-10 rounded"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">服装风格</label>
                        <div className="flex flex-wrap gap-2">
                          {["商务", "休闲", "文艺", "奇幻", "赛博"].map(style => (
                            <button
                              key={style}
                              onClick={() => setAvatar({...avatar, outfit: style})}
                              className={`px-3 py-1 rounded-full text-sm ${
                                avatar.outfit === style 
                                ? "bg-purple-500 text-white" 
                                : "bg-gray-200 text-gray-700"
                              }`}
                            >
                              {style}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 表情与气质 */}
                  <div className="bg-white p-4 rounded-xl shadow">
                    <h3 className="font-bold mb-3">表情与气质</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium mb-1">表情倾向</label>
                        <div className="flex gap-2">
                          {["温暖", "冷静", "幽默", "哲思"].map(expr => (
                            <button
                              key={expr}
                              onClick={() => setAvatar({...avatar, expression: expr})}
                              className={`px-3 py-1 rounded-full text-sm ${
                                avatar.expression === expr 
                                ? "bg-purple-500 text-white" 
                                : "bg-gray-200 text-gray-700"
                              }`}
                            >
                              {expr}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={avatar.hasMicroExpressions}
                          onChange={(e) => setAvatar({...avatar, hasMicroExpressions: e.target.checked})}
                          className="mr-2"
                        />
                        <label className="text-sm">启用微表情反馈</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 底部按钮 */}
            <div className="bg-white p-4 border-t border-gray-200">
              <div className="flex gap-3">
                <button
                  onClick={handleSaveAvatar}
                  className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg"
                >
                  保存并应用
                </button>
                <button
                  onClick={() => setAvatar({
                    name: "镜中我",
                    gender: "neutral",
                    ageStyle: "青年",
                    hairstyle: "short",
                    hairColor: "#8B5CF6",
                    skinTone: "#FBCFE8",
                    eyeColor: "#6366F1",
                    outfit: "休闲",
                    expression: "温暖",
                    hasMicroExpressions: true,
                  })}
                  className="px-4 py-3 bg-gray-200 text-gray-700 font-bold rounded-lg"
                >
                  重置
                </button>
              </div>
            </div>
          </div>
        );

      case "style":
        return (
          <div className="flex flex-col h-full bg-gray-50">
            {/* 顶部标题栏 */}
            <div className="bg-white p-4 shadow-sm">
              <h2 className="text-xl font-bold">让TA更懂你</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {/* 语气人格 */}
              <div className="bg-white p-4 rounded-xl shadow">
                <h3 className="font-bold mb-3">语气人格</h3>
                <div className="space-y-3">
                  {[
                    { key: "温柔倾听型", icon: "🤗", desc: "我会耐心陪你，不评判" },
                    { key: "理性分析型", icon: "🧠", desc: "帮你拆解问题，找到逻辑" },
                    { key: "幽默调侃型", icon: "🎭", desc: "用轻松化解你的压力" },
                    { key: "哲学思辨型", icon: "📚", desc: "我们一起追问生命意义" },
                    { key: "激励教练型", icon: "💪", desc: "推动你行动，不让你躺平" }
                  ].map(tone => (
                    <button
                      key={tone.key}
                      onClick={() => setConversationStyle({...conversationStyle, tone: tone.key})}
                      className={`w-full text-left p-4 rounded-lg border-2 ${
                        conversationStyle.tone === tone.key 
                        ? "border-purple-500 bg-purple-50" 
                        : "border-gray-200 bg-white"
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{tone.icon}</span>
                        <div>
                          <div className="font-bold">{tone.key}</div>
                          <div className="text-sm text-gray-600">{tone.desc}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 对话深度 */}
              <div className="bg-white p-4 rounded-xl shadow">
                <h3 className="font-bold mb-3">对话深度</h3>
                <div className="flex items-center mb-2">
                  <span className="text-sm">🌱 轻松日常</span>
                  <div className="flex-1 mx-4">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={conversationStyle.depth}
                      onChange={(e) => setConversationStyle({...conversationStyle, depth: parseInt(e.target.value)})}
                      className="w-full"
                    />
                  </div>
                  <span className="text-sm">🔍 深度剖析</span>
                </div>
                <div className="text-center text-sm text-gray-600">
                  {conversationStyle.depth < 33 ? "轻松日常" : conversationStyle.depth < 67 ? "中等探索" : "深度剖析"}
                </div>
              </div>

              {/* 话题偏好 */}
              <div className="bg-white p-4 rounded-xl shadow">
                <h3 className="font-bold mb-3">话题偏好</h3>
                <div className="flex flex-wrap gap-2">
                  {["情绪疏导", "目标规划", "创意激发", "人际关系", "自我认知", "世界观探讨"].map(topic => (
                    <button
                      key={topic}
                      onClick={() => {
                        const currentTopics = conversationStyle.topics;
                        if (currentTopics.includes(topic)) {
                          setConversationStyle({
                            ...conversationStyle,
                            topics: currentTopics.filter(t => t !== topic)
                          });
                        } else if (currentTopics.length < 5) {
                          setConversationStyle({
                            ...conversationStyle,
                            topics: [...currentTopics, topic]
                          });
                        }
                      }}
                      className={`px-3 py-2 rounded-full text-sm ${
                        conversationStyle.topics.includes(topic)
                        ? "bg-purple-500 text-white"
                        : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  已选 {conversationStyle.topics.length}/5 项
                </div>
              </div>

              {/* 回应节奏 */}
              <div className="bg-white p-4 rounded-xl shadow">
                <h3 className="font-bold mb-3">回应节奏</h3>
                <div className="space-y-2">
                  {[
                    { key: "快速简短", icon: "⚡", desc: "适合碎片时间" },
                    { key: "缓慢深思", icon: "🧘", desc: "适合睡前/安静时" },
                    { key: "戏剧化回应", icon: "🎬", desc: "带比喻/故事" }
                  ].map(pace => (
                    <button
                      key={pace.key}
                      onClick={() => setConversationStyle({...conversationStyle, pace: pace.key})}
                      className={`w-full text-left p-3 rounded-lg border ${
                        conversationStyle.pace === pace.key 
                        ? "border-purple-500 bg-purple-50" 
                        : "border-gray-200 bg-white"
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="text-lg mr-3">{pace.icon}</span>
                        <div>
                          <div className="font-medium">{pace.key}</div>
                          <div className="text-sm text-gray-600">{pace.desc}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 高级设置 */}
              <div className="bg-white p-4 rounded-xl shadow">
                <h3 className="font-bold mb-3">高级设置</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">启用镜像反馈模式</div>
                      <div className="text-sm text-gray-600">AI复述+深化你的语句</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={conversationStyle.mirrorFeedback}
                      onChange={(e) => setConversationStyle({...conversationStyle, mirrorFeedback: e.target.checked})}
                      className="w-5 h-5"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">记录对话用于成长报告</div>
                      <div className="text-sm text-gray-600">生成情绪/话题分析</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={conversationStyle.recordForReport}
                      onChange={(e) => setConversationStyle({...conversationStyle, recordForReport: e.target.checked})}
                      className="w-5 h-5"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 底部按钮 */}
            <div className="bg-white p-4 border-t border-gray-200">
              <div className="flex gap-3">
                <button
                  onClick={handleSaveStyle}
                  className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg"
                >
                  保存设置
                </button>
                <button
                  onClick={() => setConversationStyle({
                    tone: "温柔倾听型",
                    depth: 50,
                    topics: ["情绪疏导", "自我认知"],
                    pace: "缓慢深思",
                    mirrorFeedback: true,
                    recordForReport: true,
                  })}
                  className="px-4 py-3 bg-gray-200 text-gray-700 font-bold rounded-lg"
                >
                  默认
                </button>
              </div>
            </div>
          </div>
        );

      case "chat":
        return (
          <div className="flex flex-col h-full bg-gradient-to-br from-purple-50 to-pink-50">
            {/* 顶部导航栏 */}
            <div className="bg-white p-4 shadow-sm flex items-center">
              <button 
                onClick={() => setCurrentPage("home")}
                className="mr-4 text-2xl"
              >
                ←
              </button>
              <div className="flex items-center flex-1">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center mr-2"
                  style={{ 
                    background: `linear-gradient(135deg, ${avatar.hairColor}30, ${avatar.skinTone})`,
                    border: `2px solid ${avatar.hairColor}80`
                  }}
                >
                  <div className="text-sm">👤</div>
                </div>
                <div className="font-bold">{avatar.name}</div>
              </div>
              <button 
                onClick={() => setCurrentPage("style")}
                className="text-xl"
              >
                ⚙️
              </button>
            </div>

            {/* 对话区域 */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-2xl ${
                    msg.type === "user" 
                    ? "bg-gray-200 rounded-br-md" 
                    : "bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-bl-md"
                  }`}>
                    {msg.type === "ai" && (
                      <div className="flex items-center mb-1">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs"
                          style={{ 
                            background: `linear-gradient(135deg, ${avatar.hairColor}30, ${avatar.skinTone})`,
                            border: `1px solid ${avatar.hairColor}80`
                          }}
                        >
                          👤
                        </div>
                        <div className="text-xs opacity-90">{msg.avatar}</div>
                      </div>
                    )}
                    <div>{msg.text}</div>
                  </div>
                </div>
              ))}
              
              {/* AI正在思考 */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-2xl rounded-bl-md max-w-xs">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 输入工具栏 */}
            <div className="bg-white p-4 border-t border-gray-200">
              {messages.length === 0 && (
                <div className="mb-4 p-3 bg-purple-50 rounded-lg">
                  <div className="text-sm font-medium mb-2">今天想聊点轻松的？还是深入探索自己？</div>
                  <div className="flex gap-2">
                    {["聊聊日常", "探索情绪", "人生议题"].map(option => (
                      <button
                        key={option}
                        onClick={() => {
                          setInputText(option);
                          handleSendMessage();
                        }}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-500 hover:text-purple-500">
                  🎤
                </button>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="和你的镜中我说点什么吧..."
                  className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button 
                  onClick={handleSendMessage}
                  className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:scale-105 transition-transform"
                >
                  ➤
                </button>
              </div>
            </div>

            {/* 导航栏 */}
            <div className="bg-white border-t border-gray-200 px-4 py-2 flex justify-around">
              <button 
                onClick={() => setCurrentPage("chat")}
                className="flex flex-col items-center py-2"
              >
                <div className="text-2xl mb-1">💬</div>
                <div className="text-xs">对话</div>
              </button>
              <button 
                onClick={() => setCurrentPage("avatar")}
                className="flex flex-col items-center py-2"
              >
                <div className="text-2xl mb-1">🧍</div>
                <div className="text-xs">形象</div>
              </button>
              <button 
                onClick={() => setCurrentPage("style")}
                className="flex flex-col items-center py-2"
              >
                <div className="text-2xl mb-1">⚙️</div>
                <div className="text-xs">对话风格</div>
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {renderPage()}
    </div>
  );
};

export default App;
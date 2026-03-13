# NEXLAB Chat - Modern Messaging Application

<div align="center">

[![React](https://img.shields.io/badge/React-19.2-61dafb?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript)](https://www.typescriptlang.org)
[![Redux](https://img.shields.io/badge/Redux-2.11-764abc?logo=redux)](https://redux-toolkit.js.org)
[![Vite](https://img.shields.io/badge/Vite-7.3-646cff?logo=vite)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

*A beautiful, responsive chat application built with modern web technologies*

[Live Demo](https://github.com/Hilo22/NEXLAB-CHAT) • [Features](#-features) • [Installation](#-installation) • [Deploy](#-deployment)

</div>

---

## 🌟 Features

- **Real-time Messaging** - Send and receive messages with instant UI updates
- **Persistent Storage** - Messages and conversations saved to localStorage
- **Search Functionality** - Quickly find conversations by name
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Type-Safe** - 100% TypeScript coverage for reliability
- **Modern State Management** - Redux Toolkit for predictable state updates
- **Auto-Scroll** - Automatically scroll to latest messages
- **Message Timestamps** - Know exactly when messages were sent
- **Unread Badges** - Track unread message counts at a glance
- **Beautiful UI** - Custom gradient theme with smooth animations

---

## 🛠 Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **UI Framework** | React | 19.2 |
| **Language** | TypeScript | 5.9 |
| **Build Tool** | Vite | 7.3 |
| **State Management** | Redux Toolkit | 2.11 |
| **Styling** | CSS Modules | - |
| **Icons** | Font Awesome | 7.2 |

---

## 📁 Project Structure

```
nexlab-chat/
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── Avatar/              # User avatar with status
│   │   ├── MessageBubble/       # Message rendering
│   │   └── SearchBar/           # Search input
│   ├── features/                # Feature modules (domain-driven)
│   │   ├── chat/               # Chat window, input, messages
│   │   │   ├── ChatWindow.tsx
│   │   │   ├── ChatInput.tsx
│   │   │   ├── MessageList.tsx
│   │   │   └── chat.module.css
│   │   └── sidebar/            # Sidebar and conversations
│   │       ├── Sidebar.tsx
│   │       ├── ConversationList.tsx
│   │       ├── ConversationItem.tsx
│   │       └── sidebar.module.css
│   ├── store/                   # Redux store
│   │   ├── store.ts
│   │   ├── chatSlice.ts
│   │   └── conversationSlice.ts
│   ├── hooks/                   # Custom hooks
│   │   ├── useChat.ts
│   │   └── useLocalStorage.ts
│   ├── types/                   # TypeScript types
│   │   └── index.ts
│   ├── utils/                   # Utilities
│   │   ├── storage.ts
│   │   └── dateFormat.ts
│   ├── assets/                  # Static assets
│   │   └── logo.svg
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── vite.svg
├── dist/                        # Production build
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/Hilo22/NEXLAB-CHAT.git
cd NEXLAB-CHAT

# Install dependencies
npm install

# Start dev server
npm run dev
```

App available at `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Development server with hot reload
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 💾 Data Persistence

All messages are automatically saved to localStorage. Data persists across:
- Page reloads ✅
- Browser restarts ✅
- Offline sessions ✅

**Storage Key:** `nexlab_chat_state`

**Reset data:**
```javascript
localStorage.removeItem('nexlab_chat_state');
location.reload();
```

---

## 🎨 Design System

### Color Palette
- **Primary Red:** `#ef4444`
- **Secondary Orange:** `#f97316`
- **Background Gray:** `#f0f2f5`
- **Text Dark:** `#1a1a1a`

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 🏗 Redux Architecture

### State Structure
```typescript
{
  chat: {
    conversations: Conversation[]
    activeConversationId: string | null
  }
}
```

### Actions
- `setActiveConversation(id)` - Select conversation
- `sendMessage({conversationId, text})` - Send message
- `receiveMessage({conversationId, text})` - Receive message

### Middleware
- Auto-saves to localStorage on state changes
- Loads persisted state on app init

---

## 📦 Build Output

```
JavaScript: ~303KB (96KB gzipped)
CSS: ~6.5KB (1.9KB gzipped)
Total: ~309KB (98KB gzipped)
Modules: 84 transformed
Build time: ~1 second
```

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

---

## 🎓 Resources

- [React Docs](https://react.dev)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)

---

## 📄 License

MIT License - see [LICENSE](LICENSE) for details

---

## 👨‍💻 Author

**NEXLAB** - Building modern web applications

- GitHub: [@Hilo22](https://github.com/Hilo22)
- Repository: [NEXLAB-CHAT](https://github.com/Hilo22/NEXLAB-CHAT)

---

<div align="center">

Made with ❤️ by NEXLAB

</div>

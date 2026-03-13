# NEXLAB Chat Application

A modern, responsive chat application built with **React 18**, **TypeScript**, and **Redux Toolkit**. This project demonstrates a complete implementation of a real-time chat interface with local storage persistence.

## 🌟 Features

- ✅ **Real-time messaging** - Send and receive messages instantly
- ✅ **Persistent storage** - Messages saved to localStorage
- ✅ **Search conversations** - Find contacts quickly
- ✅ **Responsive design** - Works on desktop and mobile
- ✅ **TypeScript** - Full type safety throughout
- ✅ **Redux Toolkit** - Centralized state management
- ✅ **Font Awesome icons** - Beautiful, scalable icons
- ✅ **Auto-scroll** - Automatically scroll to latest messages
- ✅ **Message timestamps** - Know when messages were sent
- ✅ **Unread badges** - Track unread message counts

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2 | UI framework |
| TypeScript | 5.9 | Type safety |
| Redux Toolkit | 2.11 | State management |
| Vite | 7.3 | Build tool |
| CSS Modules | Latest | Scoped styling |
| Font Awesome | 7.2 | Icons |

## 📁 Project Structure

```
src/
├── assets/                  # Static assets
├── components/              # Reusable components
│   ├── Avatar/              # User avatar with status
│   ├── MessageBubble/       # Individual message display
│   └── SearchBar/           # Search input field
├── features/                # Feature modules
│   ├── chat/                # Chat window, input, message list
│   └── sidebar/             # Sidebar, conversations list
├── hooks/                   # Custom React hooks
│   ├── useChat.ts           # Chat logic hook
│   └── useLocalStorage.ts   # localStorage hook
├── store/                   # Redux store configuration
│   ├── chatSlice.ts         # Chat state & actions
│   ├── conversationSlice.ts # Conversation state
│   └── store.ts             # Store setup
├── types/                   # TypeScript interfaces
├── utils/                   # Helper functions
│   ├── storage.ts           # localStorage utilities
│   └── dateFormat.ts        # Date formatting
├── App.tsx                  # Main component
├── main.tsx                 # Entry point
└── index.css                # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Hilo22/NEXLAB-CHAT.git
cd NEXLAB-CHAT

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 📝 Available Scripts

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## 💾 Data Persistence

Messages and conversations are automatically saved to browser's localStorage. Reload the page to verify persistence!

**Storage key**: `nexlab_chat_state`

### Clear Local Storage

To reset the chat data:

```javascript
// In browser console
localStorage.removeItem('nexlab_chat_state');
location.reload();
```

## 📦 Redux Store Structure

### Chat Slice
```typescript
{
  chat: {
    conversations: [
      {
        id: string;
        name: string;
        avatar: string;
        messages: Message[];
        unreadCount: number;
        ...
      }
    ],
    activeConversationId: string | null;
  }
}
```

### Actions

- `setActiveConversation(id)` - Select a conversation
- `sendMessage({conversationId, text})` - Send a message
- `receiveMessage({conversationId, text})` - Receive a message

## 🎨 Styling

The project uses **CSS Modules** for scoped, maintainable styling:

- `App.module.css` - Main layout styles
- `chat.module.css` - Chat window styles
- `sidebar.module.css` - Sidebar styles
- Component-specific `.module.css` files

Color scheme:
- Primary: `#667eea` (Purple)
- Secondary: `#764ba2` (Dark purple)
- Neutral: `#f0f2f5` (Light gray)
- Text: `#1a1a1a` (Dark)

## 🔄 Component Hierarchy

```
App
├── Sidebar
│   ├── SearchBar
│   └── ConversationList
│       └── ConversationItem (multiple)
│           └── Avatar
│
└── ChatWindow (when conversation selected)
    ├── MessageList
    │   └── MessageBubble (multiple)
    │
    └── ChatInput
```

## 🌐 Deployment

Ready to deploy? See [DEPLOYMENT.md](./DEPLOYMENT.md) for step-by-step instructions for:

- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **Other platforms**

## 📲 Responsive Design

The application is fully responsive:

- **Desktop** (1024px+): Sidebar + Chat side-by-side
- **Tablet** (768px-1023px): Optimized layout
- **Mobile** (< 768px): Stacked layout with toggle

## 🐛 Troubleshooting

### Messages not persisting?
- Check browser's localStorage is enabled
- Verify the storage key: `nexlab_chat_state`
- Check browser console for errors

### Dev server not starting?
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### TypeScript errors?
```bash
# Compile check
npm run build
```

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**NEXLAB**  
Building modern web applications with React

---

**Live Demo**: [Deploy with Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHilo22%2FNEXLAB-CHAT)

**GitHub**: https://github.com/Hilo22/NEXLAB-CHAT

import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

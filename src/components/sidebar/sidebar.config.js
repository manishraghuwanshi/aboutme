// src/components/Sidebar/sidebar.config.js

const sidebarConfig = [
  {
    id: "react-basics",
    title: "React Basics",
    children: [
      {
        id: "jsx",
        title: "JSX",
        children: [
          { id: "intro-jsx", title: "What is JSX?" },
          { id: "jsx-rules", title: "JSX Rules" }
        ]
      },
      {
        id: "components",
        title: "Components",
        children: [
          { id: "functional-components", title: "Functional Components" },
          { id: "class-components", title: "Class Components" }
        ]
      }
    ]
  },
  {
    id: "advanced-react",
    title: "Advanced React",
    children: [
      {
        id: "hooks",
        title: "Hooks",
        children: [
          { id: "useState", title: "useState" },
          { id: "useEffect", title: "useEffect" }
        ]
      }
    ]
  }
];

export default sidebarConfig;
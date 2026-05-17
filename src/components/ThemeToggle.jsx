import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils"; // keep your existing util

// --- Redux slice ---
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: localStorage.getItem("theme") || "light",
  },
  reducers: {
    toggleTheme: (state) => {
      const newMode = state.mode === "light" ? "dark" : "light";
      state.mode = newMode;
      localStorage.setItem("theme", newMode);
      document.documentElement.classList.toggle("dark", newMode === "dark");
    },
    initializeTheme: (state) => {
      const stored = localStorage.getItem("theme") || "light";
      state.mode = stored;
      document.documentElement.classList.toggle("dark", stored === "dark");
    },
  },
});

const { toggleTheme, initializeTheme } = themeSlice.actions;

// --- Configure store (single file setup) ---
const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

// --- Component ---
const ThemeToggleInner = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    dispatch(initializeTheme());
  }, [dispatch]);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}
    >
      {theme === "dark" ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};

// --- Export wrapped with Provider ---
export const ThemeToggle = () => (
  <Provider store={store}>
    <ThemeToggleInner />
  </Provider>
);
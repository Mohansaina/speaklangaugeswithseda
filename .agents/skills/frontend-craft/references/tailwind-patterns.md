# Tailwind CSS Layout & UI Patterns

Reference patterns for creating polished, responsive, and modern web components.

---

## 1. Modern Bento Grid

```html
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    <!-- Hero / Featured Card (Spans 2 columns) -->
    <div class="md:col-span-2 relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 p-8 sm:p-10 text-white flex flex-col justify-between group hover:border-zinc-700 transition duration-300">
      <div class="relative z-10 max-w-md">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
          ✦ Core Engine
        </span>
        <h3 class="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
          Ultra-fast, deterministic workflows
        </h3>
        <p class="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Engineered from first principles to deliver instantaneous feedback loops and sub-millisecond execution.
        </p>
      </div>
      <!-- Background subtle gradient glow -->
      <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-600/25 transition duration-500"></div>
    </div>

    <!-- Secondary Metric / Focus Card -->
    <div class="relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 p-8 text-white flex flex-col justify-between group hover:border-zinc-700 transition duration-300">
      <div>
        <span class="text-4xl font-extrabold tracking-tight text-white mb-2 block">
          99.99%
        </span>
        <h4 class="text-lg font-semibold mb-1">Uptime SLA</h4>
        <p class="text-zinc-400 text-xs sm:text-sm">
          Guaranteed high availability across all global edge locations.
        </p>
      </div>
      <div class="pt-6 border-t border-zinc-800/80 mt-6 flex items-center justify-between text-xs text-zinc-500">
        <span>Verified status</span>
        <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
      </div>
    </div>

  </div>
</section>
```

---

## 2. Interactive Tactile Button with Subtle Shimmer

```html
<button class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-sm font-semibold text-white transition-all duration-200 ease-out bg-zinc-900 border border-zinc-700/80 rounded-xl shadow-sm hover:bg-zinc-800 hover:border-zinc-600 hover:shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
  <span class="relative z-10 flex items-center gap-2">
    <span>Get Started Free</span>
    <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
    </svg>
  </span>
</button>
```

---

## 3. Glassmorphic Sticky Header

```html
<header class="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200/80 dark:border-zinc-800/80 transition-all duration-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
    <div class="flex items-center gap-8">
      <a href="#" class="font-bold text-lg tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
        <span class="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-black">✦</span>
        <span>BrandName</span>
      </a>
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
        <a href="#features" class="hover:text-zinc-900 dark:hover:text-white transition">Features</a>
        <a href="#pricing" class="hover:text-zinc-900 dark:hover:text-white transition">Pricing</a>
        <a href="#docs" class="hover:text-zinc-900 dark:hover:text-white transition">Docs</a>
      </nav>
    </div>
    <div class="flex items-center gap-3">
      <a href="/login" class="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-3 py-2">
        Log in
      </a>
      <a href="/signup" class="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg shadow-sm hover:shadow transition active:scale-95">
        Start building
      </a>
    </div>
  </div>
</header>
```

---

## 4. Polished Responsive Hero Section

```html
<section class="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    
    <!-- Announcement Pill -->
    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-8 hover:border-zinc-300 dark:hover:border-zinc-600 transition cursor-pointer">
      <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
      <span>Announcing Skillmaster 2.0</span>
      <span class="text-zinc-400">→</span>
    </div>

    <!-- Main Headline with Fluid Scaling -->
    <h1 class="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.08] mb-6">
      Design and code with <br class="hidden sm:inline" />
      <span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
        uncompromising craft.
      </span>
    </h1>

    <!-- Subtitle with Constrained Reading Width -->
    <p class="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
      Empower your workflow with a purpose-built design system, resilient frontend architecture, and delightful micro-interactions.
    </p>

    <!-- CTAs -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <button class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:bg-blue-500 active:scale-95 transition">
        Explore Components
      </button>
      <button class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-sm border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 active:scale-95 transition">
        View Live Demos
      </button>
    </div>

  </div>
</section>
```


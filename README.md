# Application Overview

Insightly is a responsive React and TypeScript dashboard for tracking daily mood and activity insights. The application meets all the required functionality, such as:

- Displaying completed tasks
- Displaying a calculated mood score
- Mood analysis based on recent data
- Interactive mood trend chart with daily, weekly, and monthly views
- Mood tracker for logging the user's mood for the current day
- Light and dark themes

## Running the application

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Assumptions and Implementation Decisions

### Tech Stack

The tech stack follows the requirements, with Recharts selected for chart visualization and Vitest for the simple logic tests.

### Mood Data

The daily mood dataset contains seven entries representing the most recent seven days. Mock scores are predefined, while their dates are generated relative to the current date. This prevents the sample data from becoming stale when the project is opened at a later time.

The initial daily data is selected from controlled mock scenarios so that positive, neutral, and negative states can all be demonstrated.

Daily data is connected to the application state and can be updated by logging today's mood. Weekly and monthly chart views use dummy aggregate data, as permitted by the task requirements.

### Mood Score

Mood values use a three-point scale:

- Happy: `3`
- Neutral: `2`
- Sad: `1`

The Mood Score is calculated as the average of the mood entries from the most recent seven days.

### Mood Trends

Mood trend analysis compares the average score from the earlier portion of the selected dataset with the later portion by splitting the dataset into two parts.

A threshold of `0.25` is used before a change is classified as positive or negative. Smaller differences are treated as neutral because they are not considered significant enough to represent a meaningful trend.

### State Management

Context API is used for shared mood and theme state in accordance with the requirements.

### Performance

Additional memoization with `useMemo`, `useCallback`, or `React.memo` was intentionally avoided. The application operates on very small datasets and inexpensive calculations, so memoization would add complexity without benefit.

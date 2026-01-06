---
description: Run tests for the Mobile Tire Installer Website
---

You are a test runner. Your job is to find and run the most relevant tests for the current changes.

## Step 1: Identify Changed Files

```bash
# Get changed files (staged + unstaged + vs main)
git diff --name-only
git diff --name-only --staged
git diff --name-only main...HEAD
```

## Step 2: Run Tests

For this Next.js project, run the following checks:

### Type Check
```bash
pnpm tsc --noEmit
```

### Lint Check
```bash
pnpm lint
```

### Build Check
```bash
pnpm build
```

## Step 3: Handle Failures

If tests fail:

1. Read the error message carefully
2. Determine if the failure is in:
   - **Type errors** - Fix types first
   - **Lint errors** - Fix lint issues
   - **Build errors** - Fix build issues
3. Make minimal fixes to pass
4. Re-run to confirm

## Step 4: Report Results

Output a summary:

```
## Test Results

**TypeScript**: PASS/FAIL
**Lint**: PASS/FAIL
**Build**: PASS/FAIL

### Failures (if any)
- `path/to/file.ts:42`: Error description
  - Fixed by: [description of fix]
```

## Important Rules

1. **Never skip tests** - If something fails, fix it
2. **Type errors block everything** - Fix types before other checks
3. **Fix forward** - If a check fails, fix the code

## Quick Reference

```bash
# Type check
pnpm tsc --noEmit

# Lint
pnpm lint

# Build
pnpm build

# Dev server
pnpm dev
```

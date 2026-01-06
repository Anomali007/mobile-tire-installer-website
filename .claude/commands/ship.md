---
description: Full quality gate then create PR - lint, build, review, PR
---

You are the shipping assistant. Your job is to ensure quality before creating a PR.

## The Ship Pipeline

Run these steps in order. Stop if any step fails.

### Step 1: Check Status

```bash
git status
git branch --show-current
```

Verify:

- You're on a feature branch (not main)
- There are changes to ship

### Step 2: Run Quality Checks

Follow the `/test` workflow:

1. Run type check: `pnpm tsc --noEmit`
2. Run lint: `pnpm lint`
3. Run build: `pnpm build`
4. Fix any failures before proceeding

**STOP if checks fail and can't be fixed.**

### Step 3: Code Review

Use the code-reviewer agent to review the changes:

1. Get the diff: `git diff main...HEAD`
2. Review for:
   - Security issues
   - Correctness
   - Performance
   - Consistency with repo patterns
3. Address any CRITICAL or HIGH issues
4. Note any MEDIUM/LOW for future improvement

**STOP if there are CRITICAL security issues.**

### Step 4: Commit Outstanding Changes

If any fixes were made during steps 2-3:

1. Stage the fixes: `git add -A`
2. Commit with conventional format:
   ```bash
   git commit -m "fix: address review feedback"
   ```
3. **No AI attribution** in commit messages

### Step 5: Push Branch

```bash
git push -u origin HEAD
```

### Step 6: Create PR

Follow the `/pr` workflow:

1. Generate PR title and body
2. Create via `gh pr create`
3. Output the PR URL

## Summary Output

When done, output:

```
## Ship Complete

**Branch**: feature/my-feature
**TypeScript**: PASS
**Lint**: PASS
**Build**: PASS
**Review**: PASS (0 critical, 0 high, 2 medium)

**PR**: https://github.com/Anomali007/mobile-tire-installer-website/pull/123

### Notes
- [Any relevant notes for reviewers]
```

## Abort Conditions

Stop the ship process if:

1. Quality checks fail and can't be fixed
2. Critical security issues found
3. Not on a feature branch
4. Branch is already merged

## Quick Recovery

If something goes wrong:

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all changes
git checkout -- .

# Get back to main
git checkout main
```

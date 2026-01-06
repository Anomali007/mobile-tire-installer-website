---
description: Create a GitHub Pull Request for the current branch
---

You are going to create a GitHub Pull Request for the current branch.

## Step 1: Gather Context

Run these commands to understand the current state:

```bash
# Current branch and status
git branch --show-current
git status --short

# What commits are on this branch?
git log --oneline main..HEAD

# What files changed vs main?
git diff --stat main...HEAD

# Is the branch pushed?
git status -sb

# Check if PR already exists
gh pr view --json number,url 2>/dev/null || echo "No existing PR"
```

## Step 2: Handle Existing PR

If a PR already exists for this branch:

1. Show the existing PR URL
2. Ask if you should update it instead
3. Use `gh pr edit` to update title/body if requested:
   ```bash
   gh pr edit --title "New title" --body "New body"
   ```

## Step 3: Analyze Changes

Based on the commits and diff (vs main):

1. Identify the main purpose of this PR
2. Categorize the type of change (feature, fix, refactor, etc.)
3. Note any risky or notable changes
4. Check for any testing that was done

## Step 4: Generate PR Content

Create a PR with:

**Title**: Imperative mood, specific, under 72 chars

- Example: `Add service booking form to homepage`
- Example: `Fix mobile navigation menu on small screens`

**Body**: Use this format:

```markdown
## Summary

- [1-3 bullet points: what changed and why]

## Changes

- [Key files changed with brief description]

## Testing

- [ ] Build passes (`pnpm build`)
- [ ] Lint passes (`pnpm lint`)
- [ ] Manual testing performed
- [Additional testing notes]

## Risk Assessment

**Risk Level**: Low | Medium | High

- [Rollback strategy]
- [Areas affected]
```

## Step 5: Push & Create the PR

```bash
# Push branch if needed
git push -u origin HEAD

# Create PR with full options
gh pr create \
  --base main \
  --title "Your PR title here" \
  --body "$(cat <<'EOF'
## Summary
- Your summary here

## Changes
- File changes here

## Testing
- [ ] Build passes
- [ ] Lint passes

## Risk Assessment
**Risk Level**: Low
- Easy rollback via revert
EOF
)"
```

### Optional gh Flags to Consider

| Flag                  | Use When                          |
| --------------------- | --------------------------------- |
| `--draft`             | PR is work-in-progress            |
| `--fill`              | Auto-fill title/body from commits |
| `--fill-verbose`      | More detailed auto-fill           |
| `--label "bug"`       | Add labels                        |
| `--assignee @me`      | Self-assign                       |
| `--reviewer username` | Request review                    |

Example with options:

```bash
gh pr create \
  --base main \
  --draft \
  --assignee @me \
  --label "feature" \
  --title "Add service booking form" \
  --body "..."
```

## Step 6: Verify & Output

After creation:

```bash
# Get the PR URL
gh pr view --json url -q .url
```

Output:

1. The PR URL
2. A brief summary of what was included

## Important

- If `gh` is not authenticated, run `gh auth login` first
- Default base branch is `main`
- **NEVER** add AI attribution or co-author tags to the PR
- For draft PRs, use `--draft` flag

## gh Tips

Set defaults once to type less:

```bash
# Use SSH for git
gh config set git_protocol ssh --host github.com

# Set default editor
gh config set editor "code --wait"
```

Check auth status:

```bash
gh auth status
```

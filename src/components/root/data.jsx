export const categories = [
    {id: 'GENERAL', title: 'General'},
    {id: 'MANAGEMENT', title: 'Management'},
    {id: 'SOFTWARE_DESIGN', title: 'Software Design'},
    {id: 'FRONTEND', title: 'Frontend'},
    {id: 'BACKEND', title: 'Backend'},
    {id: 'SECURITY', title: 'Security'},
    {id: 'DEVOPS', title: 'DevOps'},
];

export const topics = [
    {
        id: 'DATA_STRUCTURES_AND_ALGORITHMS',
        title: '🧱 Data structures and algorithms',
        categoryId: 'GENERAL'
    },
    {
        id: 'GIT',
        title: '🎋 Git',
        categoryId: 'GENERAL'
    },
    {
        id: 'ESTIMATION',
        title: '⌛ Estimation',
        categoryId: 'MANAGEMENT'
    },
    {
        id: 'SDLC',
        title: '🌀 SDLC',
        categoryId: 'MANAGEMENT'
    },
    {
        id: 'DESIGN_PATTERNS',
        title: '🎨 Design patterns',
        categoryId: 'SOFTWARE_DESIGN'
    },
    {
        id: 'OOP',
        title: '🎓 OOP',
        categoryId: 'SOFTWARE_DESIGN'
    },
    {
        id: 'STATE_MANAGEMENT',
        title: '🧩 State management',
        categoryId: 'FRONTEND'
    },
    {
        id: 'FRONTEND_INFRASTRUCTURE',
        title: '🛠️ Frontend infrastructure',
        categoryId: 'FRONTEND'
    }
];

export const sets = [
    {
        level: 'ENTRY',
        topicId: 'DATA_STRUCTURES_AND_ALGORITHMS',
        details: `
            1. Main data types (string, array, object, etc)
            2. Main language constructs (conditionals, loops, try-catch, etc)
            3. Algorithmic problems (use services like leetcode to practice)
            4. Basics of the most popular data structures (stack, queue, array, hash map, tree, graph)
        `,
        links: `
            1. https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
            2. https://www.geeksforgeeks.org/introduction-to-data-structures/
            3. [https://emerginged.com/blogs/emerginged-blog/eight-data-structures-every-programmer-has-to-know](https://emerginged.com/blogs/emerginged-blog/eight-data-structures-every-programmer-has-to-know?ga_client_id=GA1.2.1491397426.1665579769&viewId=emergingedl95n6v9w682g72)
            4. https://leetcode.com/
            5. https://www.hackerrank.com/
            6. https://www.codewars.com/ 
            7. https://exercism.org/
        `
    },
    {
        level: 'INTERMEDIATE',
        topicId: 'DATA_STRUCTURES_AND_ALGORITHMS',
        details: `
            1. Main data structures and their use cases
                1. Binary tree
                2. Balanced search trees
                3. Graph, tree, DFS, BFS, working with graphs
                4. Queue, Priority queue, Stack
                5. Array, multidimensional array
                6. Hash map
                7. Linked list, double linked list
            2. BigO notation, algorithm’s complexity
        `,
        links: `
            1. https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/
            2. https://www.coursera.org/learn/algorithms-part1
            3. https://medium.com/techie-delight/top-25-algorithms-every-programmer-should-know-373246b4881b
            4. https://www.freecodecamp.org/news/data-structures-in-javascript-with-examples/
            5. https://www.educative.io/courses/algorithms-ds-interview
            6. https://medium.com/javarevisited/7-best-courses-to-learn-data-structure-and-algorithms-d5379ae2588
        `
    },

    {
        level: 'ENTRY',
        topicId: 'GIT',
        details: `
        1. What is VCS?
        2. Git and git cli
            1. Creating a repository (git init)
            2. Staging area (git add)
            3. Committing (git commit)
            4. Branching and merging (git branch, git checkout, git merge)
            5. Resolving merge conflicts
            6. Working with remote repositories (push/pull/fetch)
        3. GitHub
            1. What is a Pull Request? 
            2. Creating/merging PRs
        `,
        links: `
            1. https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/
            2. https://about.gitlab.com/topics/version-control/
            3. [https://serengetitech.com/tech/introduction-to-git-and-types-of-version-control-systems/](https://serengetitech.com/tech/introduction-to-git-and-types-of-version-control-systems/#:~:text=The%20types%20of%20VCS%20are,Distributed%20Version%20Control%20System)
        `
    },
    {
        level: 'INTERMEDIATE',
        topicId: 'GIT',
        details: `
            1. Git log
            2. Finding commits
            3. Reverting changes (git revert, git reset)
            4. Git stash
            5. Branch management, branching workflows
            6. Tagging
        `,
        links: `
            1. [https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
            2. https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things
            3. https://git-scm.com/docs/git-stash
            4. https://git-scm.com/book/en/v2/Git-Branching-Branch-Management
            5. https://git-scm.com/book/en/v2/Git-Basics-Tagging
            6. https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows
        `
    },
    {
        level: 'ADVANCED',
        topicId: 'GIT',
        details: `
            1. Recovering from issues
            2. Git reset (hard, soft)
            3. Gitflow
            4. Git bisect
        `,
        links: `
            1. https://www.git-scm.com/docs/git-bisect
            2. https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
            3. https://ohshitgit.com/
            4. https://git-scm.com/docs/git-reset
            5. https://www.atlassian.com/git/tutorials/undoing-changes/git-reset
        `
    },

    { level: 'ENTRY', topicId: 'ESTIMATION'},
    { level: 'INTERMEDIATE', topicId: 'ESTIMATION'},
    { level: 'ADVANCED', topicId: 'ESTIMATION'},

    { level: 'ENTRY', topicId: 'SDLC'},
    { level: 'INTERMEDIATE', topicId: 'SDLC'},
    { level: 'ADVANCED', topicId: 'SDLC'},

    { level: 'ENTRY', topicId: 'DESIGN_PATTERNS'},
    { level: 'INTERMEDIATE', topicId: 'DESIGN_PATTERNS'},
    { level: 'ADVANCED', topicId: 'DESIGN_PATTERNS'},

    { level: 'ENTRY', topicId: 'OOP'},
    { level: 'INTERMEDIATE', topicId: 'OOP'},
    { level: 'ADVANCED', topicId: 'OOP'},

    { level: 'ENTRY', topicId: 'STATE_MANAGEMENT'},
    { level: 'INTERMEDIATE', topicId: 'STATE_MANAGEMENT'},
    { level: 'ADVANCED', topicId: 'STATE_MANAGEMENT'},

    { level: 'ENTRY', topicId: 'FRONTEND_INFRASTRUCTURE'},
    { level: 'INTERMEDIATE', topicId: 'FRONTEND_INFRASTRUCTURE'},
    { level: 'ADVANCED', topicId: 'FRONTEND_INFRASTRUCTURE'}
]

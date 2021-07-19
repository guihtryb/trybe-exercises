const gitHub_exer = require('./gitHub_exer');

describe("1- Repositórios encontram-se na lista", () => {
    it("should return `true`", async() => {
        const repos =  await gitHub_exer.getRepos("https://api.github.com/orgs/tryber/repos")
        expect(repos).toContain('sd-01-week4-5-project-todo-list');
        expect(repos).toContain('sd-01-week4-5-project-meme-generator');
    });
});

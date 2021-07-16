// Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName
// para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
const { 
    findUserById, 
    getUserName
} = require("./getUserName")



describe("Retrieving users from cache", () => {
  it('should return "Mark" when passed number 4 as param', () => {
    expect.assertions(1);
    
    return getUserName(4).then((user) =>
    expect(user).toEqual('Mark'));
  });
  it('should return "Paul" when passed number 5 as param', () => {
      expect.assertions(1);

      return getUserName(5).then((user) =>
      expect(user).toEqual("Paul"));
  });
  it("shouldn't return an error messagen when passed number 6 as param", () => {
      expect.assertions(1);

      return getUserName(6).catch((error) => {
          expect(error).toEqual({error: 'User with 6 not found.'})
      });
  });
});




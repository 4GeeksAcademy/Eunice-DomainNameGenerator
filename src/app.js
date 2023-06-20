let pronoun = ["your", "my", "their"];
let adj = ["adorable", "playful", "furry", "loyal"];
let noun = ["puppy", "kitty", "pet", "companion"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      let domainName = pronoun[i] + adj[j] + noun[k] + ".com";
      console.log(domainName);
    }
  }
}

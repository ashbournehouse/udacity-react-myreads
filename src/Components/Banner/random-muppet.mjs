export function randomMuppet() {
  const muppets = ["Animal","Beaker","Beauregard","Bert","Big Bird","Bunsen","Camilla","Chef",
      "Clifford","Crazy Harry","Dr Teeth","Ernie","Floyd","Foo-Foo","Fozzie","George",
      "Gonzo","Janice","Kermit","Lew","Lips","Marvin","Pepe","Piggy","Pops","Rizzo","Robin",
      "Rowlf","Sam","Scooter","Statler","Waldorf","Zoot"];
  const muppet_index = Math.floor(Math.random() * muppets.length);
  return muppets[muppet_index]
}


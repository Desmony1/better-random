async function main() {
  while (!Spicetify?.showNotification) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  
  var b = new Spicetify.Playbar.Button("Better Random", "shuffle", () => {
      Spicetify.showNotification("Hallo, es geht irgendwie!");
  }, false);
}

export default main;

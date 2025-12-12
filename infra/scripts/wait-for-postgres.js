const { exec } = require("node:child_process");
const { timeStamp } = require("node:console");

function checkPostgress() {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);

  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(".");
      checkPostgress();
      return;
    }

    console.log("\nPostgres esá pronto e aceitando conexões!\n");
  }
}

console.log("\n\nAguardando Postgress aceitar conexão\n");
checkPostgress();

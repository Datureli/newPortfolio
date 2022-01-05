<template>
  <div class="ml-xl-15 mt-xs-15 pa-3">
    <v-card class="hidden-sm-and-down" style="margin-left: 70px" color="yellow" width="150" height="5">
    </v-card>
    <h1 class="white--text ml-xl-15">Paweł Chmielewski</h1>
    <div class="half-box mx-auto mt-15">
      <h2>Front-end</h2>
      <p>
        Jestem ambitnym front-end developerem <br />
        który cały czas poszukuje nowych wyzwań,zleceń<br />
        lub możliwości rozwoju
      </p>
      <p>
        Sprawdź mój ostatni projekt :
        <strong>
     <a
          href="http://stackoverflow.com/questions/44035418/how-to-create-a-half-box-in-html-css"
          >Front-end learning platform created with vue</a
        >
        </strong>
   
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Meow+Script&display=swap");

h1 {
  font-family: "Meow Script";
  font-size: 70px;
}

.half-box {
  position: relative;
  width: 500px;
  background-color: transparent;
  border: 2px solid white;
  padding: 20px;
}
.half-box::before {
  content: "";
  position: absolute;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  border-top: 1px solid white;
  border-left: 1px solid white;
}
h2 {
  position: absolute;
  display: inline-block;
  margin-left: 20px;
  padding: 0 10px;
  top: -20px;
  color: white;
  background-color: black;
}
p {
  color: white;
  margin-top: 30px;
  padding-left: 30px;
}
</style>

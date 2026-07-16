<template>
  <div>
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu">


          <router-link to="/words" class="item">
            <i class="list icon"></i>Words
          </router-link>

          <router-link to="/words/new" class="item">
            <i class="plus icon"></i>New
          </router-link>

          <router-link to="/words/test" class="item">
            <i class="universal access icon"></i>
            Word Test
          </router-link>

        </div>
      </div>
    </div>

    <div class="ui container">
      <div class="ui grid">
        <div class="row">
          <div class="twelve wide column">
            <router-view />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<template>
  <div>
    <h1>Word List</h1>

    <table class="ui celled compact table">
      <thead>
        <tr>
          <th>English</th>
          <th>German</th>
          <th colspan="3">Menu</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(word, index) in words" :key="index">
          <td>{{ word.english }}</td>
          <td>{{ word.german }}</td>

          <td width="75">
            <router-link
              class="ui button green"
              :to="{ name: 'Show', params: { id: word._id } }"
            >
              Show
            </router-link>
          </td>

          <td width="75">
            <router-link
              class="ui button yellow"
              :to="{ name: 'Edit', params: { id: word._id } }"
            >
              Edit
            </router-link>
          </td>

          <td width="75">
            <a
              @click.prevent="onDelete(word._id)"
              class="ui red button"
            >
              Delete
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


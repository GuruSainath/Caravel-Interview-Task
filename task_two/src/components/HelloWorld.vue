<template>
  <b-container>
    <br/><br/><br/><br/><br/><br/>
    <b-row>
      <b-col cols="3">
        <draggable class="list-group" element="ul" v-model="list.tasks" :options="dragOptions" @end="maindataset">
          <li class="list-group-item" v-for="(element, index) in list.tasks" :key="element.order">
            {{element.name}} ( {{element.id}} )
            <b-badge pill class="float-right">{{ element.order }} / {{ index }}</b-badge>
          </li>
        </draggable>
      </b-col>
      <b-col>
        <pre>
          {{ dataString }}
        </pre>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'hello',
  components: {
    draggable
  },
  data () {
    return {
      list: {
        id: 1,
        name: 'MAP Project',
        board: 1,
        order: 0,
        tasks: [
          {
            id: 0,
            name: 'Design a Website',
            content: '',
            is_completed: true,
            scheduled_on: null,
            remind_on: null,
            parent: null,
            listed: 1,
            users: [],
            order: 0
          },
          {
            id: 1,
            name: 'Hello Test',
            content: '',
            is_completed: false,
            scheduled_on: null,
            remind_on: null,
            parent: null,
            listed: 1,
            users: [],
            order: 1
          },
          {
            id: 2,
            name: 'Hello 1',
            content: '',
            is_completed: false,
            scheduled_on: null,
            remind_on: null,
            parent: null,
            listed: 1,
            users: [],
            order: 2
          },
          {
            id: 7,
            name: 'today',
            content: '',
            is_completed: true,
            scheduled_on: null,
            remind_on: null,
            parent: null,
            listed: 1,
            users: [],
            order: 3
          }
        ]
      },
      delayedDragging: false
    }
  },
  methods: {
    maindataset: function () {
      var listdataset = this.list.tasks
      var listlength = listdataset.length
      for (var i = 0; i < listlength; i = i + 1) {
        this.list.tasks[i].order = i
      }
    }
  },
  computed: {
    dragOptions () {
      return {
        ghostClass: 'ghost'
      }
    },
    dataString: function () {
      return JSON.stringify(this.list.tasks, null, 2)
    }
  }
}
</script>

<style>
  .ghost {
    opacity: .5;
    background: #C8EBFB;
  }
  .list-group {
    min-height: 20px;
  }
  .list-group-item {
    cursor: move;
  }
</style>

<template>
  <div id="app">
    <fixed-header>
      <div class="navbar">
        <TopMenu/>
        <ActionsMenu/>
      </div>
    </fixed-header>
    <div class="content">
      <div id="maincontent">
        <div class="persona">
          <PersonaHeader/>
          <div class="row">
            <div class="col-3 persona-card">

            </div>
            <div class="col-3 add-element">
              <AddElementHeader/>
              <div class="persona-fields">
                <div v-for="element in addElement" :key="element.id">
                  <div @drag="drag" @dragend="dragend(element.field_type)"
                       class="droppable-element" draggable="true" unselectable="on" >
                    <ContentBlock :header="element.title" :img-url="element.main"/></div>
                </div>
              </div>
              <InfoBlock/>
              <br><br>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="content">
      <grid-layout ref="gridlayout" :layout.sync="layout"
                   :col-num="6"
                   :row-height="30"
                   :is-draggable="true"
                   :is-resizable="true"
                   :vertical-compact="true"
                   :use-css-transforms="true"
      >
        <grid-item :key="item.i" v-for="item in layout"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :type="item.type"
        >
          <PersonaItem :element="item"/>
        </grid-item>
      </grid-layout>
<!--      <div>-->
<!--        <div class="layoutJSON">-->
<!--          Displayed as <code>[x, y, w, h]</code>:-->
<!--          <div class="columns">-->
<!--            <div class="layoutItem" v-for="item in layout" :key="item.i">-->
<!--              <b>{{ item.i }}</b>: [{{ item.x }}, {{ item.y }}, {{ item.w }}, {{ item.h }}]-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>
<script>
import ActionsMenu from '@/components/menu/ActionsMenu.vue';
import AddElementHeader from '@/components/AddElementHeader.vue';
import ContentBlock from '@/components/ContentNewElement.vue';
import FixedHeader from 'vue-fixed-header';
import InfoBlock from '@/components/InfoBlock.vue';
import PersonaHeader from '@/components/PersonaHeader.vue';
import TopMenu from '@/components/menu/TopMenu.vue';
import VueGridLayout from 'vue-grid-layout';
import PersonaItem from '@/components/PersonaItem.vue';

const mouseXY = { x: null, y: null };
const DragPos = {
  x: null, y: null, w: 1, h: 1, i: null,
};

export default {
  name: 'SmaplyPersona',
  components: {
    ActionsMenu,
    AddElementHeader,
    ContentBlock,
    FixedHeader,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    InfoBlock,
    PersonaHeader,
    PersonaItem,
    TopMenu,
  },
  data() {
    return {
      // Elements to select from.
      addElement: [
        {
          id: 1, field_type: 'SHORT_TEXT', main: 'text.png', title: 'SHORT TEXT', data: null,
        },
        {
          id: 2, field_type: 'LONG_TEXT', main: 'long.png', title: 'LONG TEXT', data: null,
        },
        {
          id: 3, field_type: 'IMAGE', main: 'image.png', title: 'IMAGE', data: null,
        },
        {
          id: 4, field_type: 'IMAGE_GALLERY', main: 'galleryImgs.png', title: 'IMAGE GALLERY', data: null,
        },
        {
          id: 5, field_type: 'NUMBER', main: 'numbers.png', title: 'NUMBER', data: null,
        },
      ],
      layout: [
        {
          x: 2, y: 6, w: 4, h: 2, i: '0', type: 'SHORT_TEXT',
        },
        {
          x: 2, y: 0, w: 4, h: 2, i: '1', type: 'SHORT_TEXT',
        },
        {
          x: 0, y: 11, w: 2, h: 13, i: '2', type: 'IMAGE_GALLERY',
        },
        {
          x: 2, y: 4, w: 4, h: 2, i: '3', type: 'SHORT_TEXT',
        },
        {
          x: 2, y: 8, w: 4, h: 3, i: '4', type: 'SHORT_TEXT',
        },
        {
          x: 2, y: 2, w: 4, h: 2, i: '5', type: 'SHORT_TEXT',
        },
        {
          x: 0, y: 0, w: 2, h: 7, i: '6', type: 'IMAGE',
        },
        {
          x: 0, y: 7, w: 2, h: 2, i: '7', type: 'SHORT_TEXT',
        },
        {
          x: 0, y: 9, w: 2, h: 2, i: '8', type: 'SHORT_TEXT',
        },
        {
          x: 2, y: 11, w: 4, h: 9, i: '9', type: 'LONG_TEXT',
        },
      ],
      draggable: true,
      resizable: true,
      mirrored: false,
      responsive: true,
      preventCollision: false,
      compact: true,
      index: 0,
      marginX: 10,
      marginY: 10,
    };
  },
  mounted() {
    this.index = this.layout.length;
    document.addEventListener('dragover', (e) => {
      mouseXY.x = e.clientX;
      mouseXY.y = e.clientY;
    }, false);
  },
  watch: {
    layout() {
      // console.log(this.layout);
    },
  },
  methods: {
    drag() {
      const parentRect = document.getElementById('content').getBoundingClientRect();
      let mouseInGrid = false;
      if (((mouseXY.x > parentRect.left) && (mouseXY.x < parentRect.right))
        && ((mouseXY.y > parentRect.top) && (mouseXY.y < parentRect.bottom))) {
        mouseInGrid = true;
      }
      if (mouseInGrid === true && (this.layout.findIndex((item) => item.i === 'drop')) === -1) {
        this.layout.push({
          x: (this.layout.length * 2) % (this.colNum || 10),
          y: this.layout.length + (this.colNum || 10), // puts it at the bottom
          w: 1,
          h: 1,
          i: 'drop',
        });
      }
      const index = this.layout.findIndex((item) => item.i === 'drop');
      if (index !== -1) {
        try {
          this.$refs.gridlayout.$children[this.layout.length].$refs.item.style.display = 'none';
        } catch {
          console.log('catch ...');
        }
        const el = this.$refs.gridlayout.$children[index];
        el.dragging = { top: mouseXY.y - parentRect.top, left: mouseXY.x - parentRect.left };
        const newPos = el.calcXY(mouseXY.y - parentRect.top, mouseXY.x - parentRect.left);

        if (mouseInGrid === true) {
          this.$refs.gridlayout.dragEvent('dragstart', 'drop', newPos.x, newPos.y, 1, 1);
          DragPos.i = String(index);
          DragPos.x = this.layout[index].x;
          DragPos.y = this.layout[index].y;
        }
        if (mouseInGrid === false) {
          this.$refs.gridlayout.dragEvent('dragend', 'drop', newPos.x, newPos.y, 1, 1);
          this.layout = this.layout.filter((obj) => obj.i !== 'drop');
        }
      }
    },
    dragend(e) {
      const parentRect = document.getElementById('content').getBoundingClientRect();
      let mouseInGrid = false;
      if (((mouseXY.x > parentRect.left) && (mouseXY.x < parentRect.right))
        && ((mouseXY.y > parentRect.top) && (mouseXY.y < parentRect.bottom))) {
        mouseInGrid = true;
      }
      if (mouseInGrid === true) {
        console.log(e);
        console.log(`Dropped element props:\n${JSON.stringify(DragPos, ['x', 'y', 'w', 'h', 'i'], 2)}`);
        this.$refs.gridlayout.dragEvent('dragend', 'drop', DragPos.x, DragPos.y, 1, 1);
        this.layout = this.layout.filter((obj) => obj.i !== 'drop');

        // add a dragged item.
        this.layout.push({
          x: DragPos.x,
          y: DragPos.y,
          w: 2,
          h: 2,
          i: DragPos.i,
          type: e,
        });
        try {
          this.$refs.gridLayout.dragEvent('dragend', DragPos.i, DragPos.x, DragPos.y, 1, 1);
          this.$refs.gridLayout.$children[this.layout.length].$refs.item.style.display = 'block';
        } catch (err) {
          // console.log('error...', err);
        }
      }
    },
  },
};

</script>
<style scoped lang="scss">
$max-width-persona-card: 800px;
* {
  margin: 0;
  padding: 0;
  border: 0;
}
.droppable-element {
  background-color: #fff;
  border: 1px solid #e6e4e4;
  box-shadow: 1px 1px 0 0 #ccc;
  cursor: grab;
  margin: 15px;
  min-height: 110px;
  position: relative;
  text-align: center;
  width: 163px;
}
.vue-grid-layout {
  background: #eee;
  max-width: $max-width-persona-card;
}
.vue-grid-item:not(.vue-grid-placeholder) {
  background: #fff;
  box-shadow: 1px 1px #dedede;
}

.vue-grid-item {
  .resizing {
    opacity: 0.9;
  }
  .static {
    background: #cce;
  }
  .text {
    bottom: 0;
    font-size: 24px;
    height: 100%;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    width: 100%;
  }
  .no-drag {
    height: 100%;
    width: 100%;
  }
  .add {
    cursor: pointer;
  }
}

.vue-draggable-handle {
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
  background-origin: content-box;
  background-position: bottom right;
  background-repeat: no-repeat;
  box-sizing: border-box;
  cursor: pointer;
  height: 20px;
  left: 0;
  padding: 0 8px 8px 0;
  position: absolute;
  top: 0;
  width: 20px;
}

.layoutJSON {
  background: #ddd;
  border: 1px solid black;
  margin-top: 10px;
  padding: 120px 10px;
}
.columns {
  columns: 120px;
}

.col-3 {
  min-width: 200px;

  &.add-element {
    background-color: #f0f0f0;
    position: fixed;
    right: 0;
    top: 110px;
    width: 390px;
    z-index: 999999;
  }
}
.persona {
  max-width: $max-width-persona-card;
}
.persona-fields {
  display: flex;
  flex-wrap: wrap;
}
.navbar.vue-fixed-header {
  background-color: #3C4646;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;

  .actions-menu {
    background-color: #f0f0f0;
    height: 64px;
  }
}
.content {
  margin-top: 110px;
}
</style>

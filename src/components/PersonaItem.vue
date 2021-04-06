<template>
  <div v-if="element.type === 'IMAGE'">
    <ImageField/>
  </div>
  <div v-else-if="element.type === 'NUMBER'">
    <NumberField/>
  </div>
  <div v-else-if="element.type === 'SHORT_TEXT'">
    <ShortTextField/>
  </div>
  <div v-else-if="element.type === 'LONG_TEXT'">
    <LongTextField/>
  </div>
  <div v-else-if="element.type === 'IMAGE_GALLERY'">
    <ImageGalleryField/>
  </div>
</template>
<script>
import ImageField from '@/components/fields/ImageField.vue';
import NumberField from '@/components/fields/NumberField.vue';
import ShortTextField from '@/components/fields/ShortTextField.vue';
import LongTextField from '@/components/fields/LongTextField.vue';
import ImageGalleryField from '@/components/fields/ImageGalleryField.vue';

export default {
  name: 'PersonaItem',
  components: {
    ImageField,
    ImageGalleryField,
    LongTextField,
    NumberField,
    ShortTextField,
  },
  props: {
    element: {
      type: Object,
    },
  },
  mounted() {
    // console.log(this.element.field_type);
    // console.log(this.element.order);
    console.log(this.element.type);
  },
};
</script>

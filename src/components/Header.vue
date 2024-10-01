<template>
  <header>
    <h1
      ref="textElement"
      class="pt-12 text-center text-5xl md:text-6xl uppercase font-bold inline-block text-transparent bg-clip-text relative overflow-hidden"
      :style="textStyle"
    >
      &lt; Petar<span class="text-gray-300">.dev /&gt;</span>
    </h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      textStyle: {
        backgroundImage: "linear-gradient(to right, #a855f7, #9333ea)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
      },
    };
  },
  mounted() {
    this.animateFlash();
  },
  methods: {
    animateFlash() {
      const textElement = this.$refs.textElement;
      let start = null;
      const duration = 2000; // Animation duration in milliseconds

      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = (timestamp - start) / duration;

        if (progress < 1) {
          const x = progress * 100;
          const y = progress * 100;
          this.textStyle.backgroundImage = `linear-gradient(to bottom right,
            rgba(168, 85, 247, 0.4) ${x - 10}% ${y - 10}%,
            rgba(255, 255, 255, 0.8) ${x}% ${y}%,
            rgba(168, 85, 247, 0.4) ${x + 10}% ${y + 10}%),
            linear-gradient(to right, #a855f7, #9333ea)`;
          requestAnimationFrame(animate);
        } else {
          start = null;
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    },
  },
};
</script>

<style scoped></style>

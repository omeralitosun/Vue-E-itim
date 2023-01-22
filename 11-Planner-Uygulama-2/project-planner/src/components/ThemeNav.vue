<template>
    <div class="test" :class="{dark: darkTheme}">
     <input type="checkbox" id="toggle" class="toggle--checkbox" v-model="darkTheme">
     <label for="toggle" class="toggle--label">
     <span class="toggle--label-background"></span>
     </label>
     <div class="background"></div>
    </div>  
</template>

<script>
export default {
data() {
  return {
    darkTheme : false,
  }
},
watch:{
  darkTheme(d){
    this.$emit('themeChange', d);
  }
},
}
</script>

<style>
:root {
  /** sunny side **/
  
  --blue-border: #72cce3;
  --blue-color: #96dcee;
  --yellow-background: #fffaa8;
  --yellow-border: #f5eb71;
  /** dark side **/
  --indigo-background: #212430;
  --indigo-border: #5d6baa;
  --indigo-color: #6b7abb;
  --gray-border: #e8e8ea;
  --gray-dots: #e8e8ea;
  /** general **/
  --white: #fff;
}

.test{
    float:right;
}


.toggle--checkbox {
  display: none;
}
.toggle--checkbox:checked ~ .background {
  background: var(--indigo-background);
}

.toggle--checkbox:checked ~ .project-div {
  background: #212430;
}

.toggle--checkbox:checked + .toggle--label {
  background: var(--indigo-color);
  border-color: var(--indigo-border);
  /** Change the cloud to stars **/
  /** Change the sun into the moon **/
  /** Show the dimples on the moon **/
}
.toggle--checkbox:checked + .toggle--label .toggle--label-background {
  left: 6.0px;
  width: 0.5px;
}
.toggle--checkbox:checked + .toggle--label .toggle--label-background:before {
  width: 0.5px;
  height: 0.5px;
  top: -2.5px;
}
.toggle--checkbox:checked + .toggle--label .toggle--label-background:after {
  width: 0.5px;
  height: 0.5px;
  left: -3.0px;
  top: 2.0px;
}
.toggle--checkbox:checked + .toggle--label:before {
  background: var(--white);
  border-color: var(--gray-border);
  animation-name: switch;
  animation-duration: 350ms;
  animation-fill-mode: forwards;
}
.toggle--checkbox:checked + .toggle--label:after {
  transition-delay: 350ms;
  opacity: 1;
}
.toggle--label {
  /** Placeholder element, starting at blue **/
  width: 20px;
  height: 10px;
  background: var(--blue-color);
  border-radius: 10px;
  border: 0.5px solid var(--blue-border);
  display: flex;
  position: relative;
  transition: all 350ms ease-in;
  /** The sun cloud and moon stars **/
  /** Sun/Moon element **/
  /** Gray dots on the moon **/
}
.toggle--label-background {
  width: 1px;
  height: 0.5px;
  border-radius: 0.5px;
  position: relative;
  background: var(--white);
  left: 13.5px;
  top: 4.5px;
  transition: all 150ms ease-in;
}
.toggle--label-background:before {
  content: "";
  position: absolute;
  top: -0.5px;
  width: 4.0px;
  height: 0.5px;
  border-radius: 0.5px;
  background: var(--white);
  left: -2px;
  transition: all 150ms ease-in;
}
.toggle--label-background:after {
  content: "";
  position: absolute;
  top: 0.5px;
  width: 4.0px;
  height: 0.5px;
  border-radius: 0.5px;
  background: var(--white);
  left: -1px;
  transition: all 150ms ease-in;
}
.toggle--label:before {
  animation-name: reverse;
  animation-duration: 350ms;
  animation-fill-mode: forwards;
  transition: all 350ms ease-in;
  content: "";
  width: 8.2px;
  height: 8.2px;
  border: 0.5px solid var(--yellow-border);
  top: 0.4px;
  left: 0.4px;
  position: absolute;
  border-radius: 8.2px;
  background: var(--yellow-background);
}
.toggle--label:after {
  transition-delay: 0ms;
  transition: all 250ms ease-in;
  position: absolute;
  content: "";
  box-shadow: var(--gray-dots) -1.3px 0 0 0.2px, var(--gray-dots) -2.4px 1.4px 0 -0.2px;
  left: 14.3px;
  top: 2.3px;
  width: 1px;
  height: 1px;
  background: transparent;
  border-radius: 50%;
  opacity: 0;
}

@keyframes switch {
  0% {
    left: 0.4px;
  }
  60% {
    left: 0.4px;
    width: 11.2px;
  }
  100% {
    left: 10.4px;
    width: 8.2px;
  }
}
@keyframes reverse {
  0% {
    left: 10.4px;
    width: 8.2px;
  }
  60% {
    left: 7.2px;
    width: 11.2px;
  }
  100% {
    left: 0.4px;
  }
}
</style>
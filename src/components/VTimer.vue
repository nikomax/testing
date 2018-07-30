<template>
  <div class="timer">
    <div class="timer__title">
      до заселення у вашу нову квартиру залишилося:
    </div>
    <div class="timer__counters">
      <div class="timer__counter">{{ days | twoDigits }}<span class="timer__label">{{ rentTranslations.days }}</span></div>
      <div class="timer__counter">{{ hours | twoDigits }}<span class="timer__label">{{ rentTranslations.hours }}</span></div>
      <div class="timer__counter">{{ minutes | twoDigits }}<span class="timer__label">{{ rentTranslations.minutes }}</span></div>
    </div>
  </div>
</template>

<script>
let interval = null
export default {
  name: 'VTimer',
  props: {
    deadline: {
      type: String
    },
    end: {
      type: String
    },
    stop: {
      type: Boolean
    }
  },
  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      date: null,
      diff: 0
    }
  },
  created () {
    if (!this.deadline && !this.end) {
      throw new Error("Missing props 'deadline' or 'end'")
    }
    let endTime = this.deadline ? this.deadline : this.end
    this.date = Math.trunc(Date.parse(endTime.replace(/-/g, '/')) / 1000)
    if (!this.date) {
      throw new Error("Invalid props value, correct the 'deadline' or 'end'")
    }
    interval = setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
    }, 1000)
  },
  computed: {
    minutes () {
      return Math.trunc(this.diff / 60) % 60
    },
    hours () {
      return Math.trunc(this.diff / 60 / 60) % 24
    },
    days () {
      return Math.trunc(this.diff / 60 / 60 / 24)
    }
  },
  watch: {
    now (value) {
      this.diff = this.date - this.now
      if (this.diff <= 0 || this.stop) {
        this.diff = 0
        // Remove interval
        clearInterval(interval)
      }
    }
  },
  filters: {
    twoDigits (value) {
      if (value.toString().length <= 1) {
        return '0' + value.toString()
      }
      return value.toString()
    }
  },
  destroyed () {
    clearInterval(interval)
  }
}
</script>

# Hello VitePress

::: tip
This is a tip
:::

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```


[Home](/) <!-- 跳转到根目录的index.md -->
[basic](/basic) <!-- 跳转到 foo 文件夹的 index.html-->
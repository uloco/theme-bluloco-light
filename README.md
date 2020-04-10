# Bluloco Light Theme

### Description

A fancy but yet sophisticated light designer color scheme / theme for
Visual Studio Code.

This theme features a much more comprehensive usage of syntax scopes and color
consistency, with due regards to aesthetics, contrast and readability.
Originally forked from the beautiful One Light Theme, enhanced with the
meaningful intuitive Bluloco color palette.

This theme also works very good when Apple's **Nightshift Mode** is activated.

Give it a try :)

## Syntax Palette

| Scope                | Color                           | HEX     | RGB                |
| -------------------- | ------------------------------- | ------- | ------------------ |
| Background           | <div class="color bg" />        | #f9f9f9 | rgb(249, 249, 249) |
| Foreground           | <div class="color fg" />        | #383a42 | rgb(56, 58, 66)    |
| Comment              | <div class="color comment" />   | #a0a1a7 | rgb(160, 161, 167) |
| Keyword              | <div class="color keyword" />   | #0098dd | rgb(0, 152, 221)   |
| Function/Method      | <div class="color function" />  | #23974a | rgb(35, 151, 74)   |
| Property             | <div class="color property" />  | #a05a48 | rgb(160, 90, 72)   |
| String               | <div class="color string" />    | #c5a332 | rgb(197, 163, 50)  |
| Number               | <div class="color number" />    | #ce33c0 | rgb(206, 51, 192)  |
| Constant             | <div class="color constant" />  | #823ff1 | rgb(130, 63, 241)  |
| Markup Tag           | <div class="color tab" />       | #275fe4 | rgb(39, 95, 228)   |
| Markup Attribute     | <div class="color attribute" /> | #df631c | rgb(223, 99, 28)   |
| Class/Type/Interface | <div class="color class" />     | #d52753 | rgb(213, 39, 83)   |
| Operator/Punctuation | <div class="color operator" />  | #7a82da | rgb(122, 130, 218) |

## Screenshots

Here are a bunch of screenshots. I tested a long range of languages, these are just a few.  
You can test them all in this repo:
https://github.com/uloco/syntax-highlighting-samples

![js](screenshots/js.png)

![ts](screenshots/ts.png)

![py](screenshots/py.png)

![rb](screenshots/rb.png)

![php](screenshots/php.png)

![html](screenshots/html.png)

![css](screenshots/css.png)

<style>
.color {
  border-left: 1px solid #e0e2e5;
  border-right: 1px solid #e0e2e5;
  height: 40px;
  width: 40px;
  margin-top: -6px;
  margin-bottom: -6px
  /* margin-top: -4px;
  margin-bottom: -4px */
}

.bg {  background-color: #f9f9f9; }
.fg { background-color: #383a42; }
.comment { background-color: #a0a1a7; }
.keyword { background-color: #0098dd; }
.function { background-color: #23974a; }
.property { background-color: #a05a48; }
.string { background-color: #c5a332; }
.number { background-color: #ce33c0; }
.constant { background-color: #823ff1; }
.tab { background-color: #275fe4; }
.attribute { background-color: #df631c; }
.class { background-color: #d52753; }
.operator { background-color: #7a82da; } 
</style>

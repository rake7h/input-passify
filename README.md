# input-passify
Password requirement checker for HTML password field

*HTML*
``` html
<form>
   <div class="passify" id="passify">
      <div class="passify-input-block">
         <label for="passify-field">Password</label>
         <input class="passify-field form-control-lg" type="password" />
         <div class="passify-password-text" role="button"></div>
      </div>
      <div class="passify-check-window hide">
         <ul class="passify-check-list">
            <li class="passify-check-list-item" id="passify-item-long-enough">9 characters minimum</li>
            <li class="passify-check-list-item" id="passify-item-uppercase">One uppercase character</li>
            <li class="passify-check-list-item" id="passify-item-specialchar">One special character(!@$^&*.,?)</li>
         </ul>
      </div>
   </div>
</form>
```

*JS*

``` javascript
<script type="module">
  import * as module from './script.js'
  let passify = new module.default()
  passify.init()
</script>
```

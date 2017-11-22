# Context
Angular directive for togglable context menu

1. Add `context-toggle` directive to the element which will toggle the menu. The context menu must be a child of this element.
2. Add a child element with class `.context-menu`.

Example markup:
```html
<div class="context-toggle" context-toggle>
    <div icon class="icon mod-primary" name="context"></div>
    <div class="context-menu">
        <h3>Manage Item</h3>
        <nav class="nav-context">
            <ul class="list-context">
                <li class="item-context"><a>Menu item</a></li>
                <li class="item-context"><a>Menu item</a></li>
                <li class="item-context"><a>Menu item</a></li>
            </ul>-
        </nav>
    </div>
</div>
```

# Context
Angular directive for togglable context menu

1. Add `context-toggle` directive to the element which will toggle the menu. The context menu must be a child of this element.
2. Add a child element with class `.context-menu`.

Example markup:
```
<div class="context-toggle" context-toggle>
    <div icon class="icon mod-primary" name="context"></div>
    <div class="context-menu">
        <h3>Manage Item</h3>
        <nav class="nav-context">
            <ul class="list-context">
                <li class="item-context"><a>View Analytics</a></li>
                <li class="item-context" ui-sref="faq({documentId:document.id})"><a>Manage FAQ</a></li>
                <li class="item-context"><a>Duplicate</a></li>
                <li class="item-context"><a>Recall / Show</a></li>
                <li class="item-context"><a>Update & Resend</a></li>
            </ul>-
        </nav>
        <ul class="list-meta">
            <li class="item-meta">
                <span>Created:</span>
                {{ document.timing.createDate }}
            </li>
            <li class="item-meta">
                <span>Author:</span>
                A. Author
            </li>
        </ul>
    </div>
</div>
```

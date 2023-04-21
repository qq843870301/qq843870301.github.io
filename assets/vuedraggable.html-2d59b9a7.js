import{_ as p,M as o,p as l,q as c,Q as a,t as n,N as t,a1 as e}from"./framework-6ff95823.js";const i={},r=a("h1",{id:"拖动排序",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#拖动排序","aria-hidden":"true"},"#"),n(" 拖动排序")],-1),u={id:"vuedraggable",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#vuedraggable","aria-hidden":"true"},"#",-1),k={href:"https://www.npmjs.com/package/vuedraggable",target:"_blank",rel:"noopener noreferrer"},v=e(`<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i vuedraggable <span class="token parameter variable">-S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>draggable</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myArray<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">group</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>people<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@start</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drag = true<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@end</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drag = false<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element in myArray<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ element.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>draggable</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> draggable <span class="token keyword">from</span> <span class="token string">&quot;vuedraggable&quot;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),g={id:"sortablejs",tabindex:"-1"},m=a("a",{class:"header-anchor",href:"#sortablejs","aria-hidden":"true"},"#",-1),h={href:"http://www.sortablejs.com/",target:"_blank",rel:"noopener noreferrer"},b=e(`<h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> sortablejs <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1" aria-hidden="true">#</a> 使用</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Sortable <span class="token keyword">from</span> <span class="token string">&quot;sortablejs&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;items&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> sortable <span class="token operator">=</span> Sortable<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function _(f,q){const s=o("ExternalLinkIcon");return l(),c("div",null,[r,a("h2",u,[d,n(),a("a",k,[n("vuedraggable"),t(s)])]),v,a("h2",g,[m,n(),a("a",h,[n("sortablejs"),t(s)])]),b])}const w=p(i,[["render",_],["__file","vuedraggable.html.vue"]]);export{w as default};

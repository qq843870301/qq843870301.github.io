import{_ as n,p as s,q as a,a1 as e}from"./framework-6ff95823.js";const i={},c=e(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><h4 id="_1-以非-root-权限运行-docker-命令" tabindex="-1"><a class="header-anchor" href="#_1-以非-root-权限运行-docker-命令" aria-hidden="true">#</a> 1. 以非 root 权限运行 docker 命令</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>. 添加docker用户组，默认情况下安装好已经创建
$ <span class="token function">sudo</span> <span class="token function">groupadd</span> <span class="token function">docker</span>
<span class="token number">2</span>. 将用户加入该group
$ <span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> <span class="token environment constant">$USER</span>
<span class="token comment"># 或者使用下面命令</span>
$ <span class="token function">sudo</span> gpasswd <span class="token parameter variable">-a</span> <span class="token variable">\${<span class="token environment constant">USER</span>}</span> <span class="token function">docker</span>
<span class="token number">3</span>. 重启服务
$ <span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">docker</span> restart
<span class="token comment"># 或者</span>
$ <span class="token function">sudo</span> /etc/init.d/docker restart
<span class="token number">4</span>. 切换当前会话到新 group 或者重启 X 会话
   注意:这一步是必须的，否则因为 <span class="token function">groups</span> 命令获取到的是缓存的组信息，
   刚添加的组信息未能生效，所以 <span class="token function">docker</span> images 执行时同样有错。
$ newgrp - <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-docker-端口映射" tabindex="-1"><a class="header-anchor" href="#_2-docker-端口映射" aria-hidden="true">#</a> 2. docker 端口映射</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token punctuation">[</span>宿主机端口号<span class="token punctuation">]</span>:<span class="token punctuation">[</span>docker内服务端口号<span class="token punctuation">]</span> <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>镜像名称<span class="token punctuation">]</span>
例如：
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 <span class="token parameter variable">-d</span> nginx:latest
该命令得作用是把docker内的80端口映射到宿主机的8080端口，-d表示以守护进程启动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-往-docker-内拷贝文件" tabindex="-1"><a class="header-anchor" href="#_3-往-docker-内拷贝文件" aria-hidden="true">#</a> 3. 往 docker 内拷贝文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> <span class="token punctuation">[</span>文件<span class="token punctuation">]</span> <span class="token punctuation">[</span>容器id<span class="token punctuation">]</span>:/<span class="token punctuation">[</span>拷贝文件存放路径<span class="token punctuation">]</span>
例如:
<span class="token function">docker</span> <span class="token function">cp</span> index.html 17add7bbc58c://usr/share/nginx/html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-保存对容器的修改" tabindex="-1"><a class="header-anchor" href="#_4-保存对容器的修改" aria-hidden="true">#</a> 4. 保存对容器的修改</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>拷贝文件到docker容器内，停止容器后，再重新启动，发现容器又变成了最初的状态，可以通过如下的命令保存我们的修改：
<span class="token function">docker</span> commit <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>修改说明<span class="token punctuation">]</span> <span class="token punctuation">[</span>容器id<span class="token punctuation">]</span> <span class="token punctuation">[</span>新镜像名称<span class="token punctuation">]</span>
此条命令返回的是新产生的镜像的id

例如：
<span class="token function">docker</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;增加index.html&quot;</span> 17add7bbc58c nginx-index:0.1
新生成了镜像nginx-index，版本号是0.1，使用docker images命令可以看到
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-docker-操作" tabindex="-1"><a class="header-anchor" href="#_5-docker-操作" aria-hidden="true">#</a> 5. docker 操作</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>查看本地镜像：
<span class="token function">docker</span> images

下载镜像:
<span class="token function">docker</span> pull <span class="token punctuation">[</span>镜像名称:版本<span class="token punctuation">]</span>
例如：
<span class="token function">docker</span> pull ubuntu:16.04，不指定时默认ubuntu:latest

停止容器：
<span class="token function">docker</span> stop <span class="token punctuation">[</span>容器id<span class="token punctuation">]</span>

查看正在运行的容器:
<span class="token function">docker</span> <span class="token function">ps</span>

查看所有容器:
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>

删除容器:
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token punctuation">[</span>容器id<span class="token punctuation">]</span>

删除镜像:
<span class="token function">docker</span> rmi <span class="token punctuation">[</span>镜像id<span class="token punctuation">]</span>

创建镜像:
<span class="token function">docker</span> build

搜索镜像：
<span class="token function">docker</span> search <span class="token punctuation">[</span>镜像名称<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-dockerfile-构建" tabindex="-1"><a class="header-anchor" href="#_6-dockerfile-构建" aria-hidden="true">#</a> 6. Dockerfile 构建</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>基础镜像
FROM ubuntu
作者
MAINTAINER xbf
运行的命令
更换软件源，加快下载速度
RUN <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/archive.ubuntu.com/mirrors.ustc.edu.cn/g&#39;</span> /etc/apt/sources.list
RUN <span class="token function">apt-get</span> update
RUN <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> nginx
COPY index.html /var/www/html
入口，将nginx作为非守护进程执行
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;/usr/sbin/nginx&quot;</span>, <span class="token string">&quot;-g&quot;</span>, <span class="token string">&quot;daemon off;&quot;</span><span class="token punctuation">]</span>
EXPOSE <span class="token number">80</span>

Dockerfile创建完成后，可以通过docker build命令创建镜像

<span class="token function">docker</span> build <span class="token parameter variable">-t</span> xbf/nginx-index <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-把容器中的目录映射到宿主机" tabindex="-1"><a class="header-anchor" href="#_7-把容器中的目录映射到宿主机" aria-hidden="true">#</a> 7. 把容器中的目录映射到宿主机</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> nginx <span class="token parameter variable">-v</span> /usr/share/nginx/html nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令的作用是把 nginx 容器中的/usr/share/nginx/html 目录映射到宿主机中，映射的位置可以通过 docker inspect nginx 命令查看，找到这一项内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot;Mounts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;volume&quot;</span>,
        <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;07f040bfb50e76ff4f9b2e2c5edd4881921e5a7cc2257db062c209e5005fbaef&quot;</span>,
        <span class="token string">&quot;Source&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/volumes/07f040bfb50e76ff4f9b2e2c5edd4881921e5a7cc2257db062c209e5005fbaef/_data&quot;</span>,
        <span class="token string">&quot;Destination&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/usr/share/nginx/html&quot;</span>,
        <span class="token string">&quot;Driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;local&quot;</span>,
        <span class="token string">&quot;Mode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;RW&quot;</span><span class="token builtin class-name">:</span> true,
        <span class="token string">&quot;Propagation&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中的 source 就是在宿主机中的目录位置。对该目录的修改，会实时的反应在容器中。</p><h4 id="_8-把宿主机中的目录挂载到容器中" tabindex="-1"><a class="header-anchor" href="#_8-把宿主机中的目录挂载到容器中" aria-hidden="true">#</a> 8. 把宿主机中的目录挂载到容器中</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">-d</span> <span class="token parameter variable">-v</span> <span class="token environment constant">$PWD</span>/html:/usr/share/nginx/html nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表示把当前目录下的 html 目录挂载到容器的/usr/share/nginx/html 目录</p><h4 id="_9-进入一个正在运行的容器" tabindex="-1"><a class="header-anchor" href="#_9-进入一个正在运行的容器" aria-hidden="true">#</a> 9. 进入一个正在运行的容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token punctuation">[</span>容器id<span class="token punctuation">]</span> /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_10-从镜像挂载" tabindex="-1"><a class="header-anchor" href="#_10-从镜像挂载" aria-hidden="true">#</a> 10. 从镜像挂载</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>产生一个仅有数据的容器
<span class="token function">docker</span> create <span class="token parameter variable">-v</span> <span class="token environment constant">$PWD</span>/data:/var/mydata data_container ubuntu

data_container表示容器名称， ubuntu是基础镜像名称

创建容器挂载容器
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> --volumes-from data_container ubuntu /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_11-给镜像添加-tag" tabindex="-1"><a class="header-anchor" href="#_11-给镜像添加-tag" aria-hidden="true">#</a> 11. 给镜像添加 tag</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> tag ubuntu colin/ubuntu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_12-提交镜像" tabindex="-1"><a class="header-anchor" href="#_12-提交镜像" aria-hidden="true">#</a> 12. 提交镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>当然提交前需要先登陆
<span class="token function">docker</span> login
输入用户名和密码
<span class="token function">docker</span> push colin/ubuntu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13-docker-compose-安装" tabindex="-1"><a class="header-anchor" href="#_13-docker-compose-安装" aria-hidden="true">#</a> 13. docker-compose 安装</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/docker/compose/releases/download/1.22.0/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose

<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose

查看是否安装成功
<span class="token function">docker-compose</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),l=[c];function t(d,o){return s(),a("div",null,l)}const p=n(i,[["render",t],["__file","docker.html.vue"]]);export{p as default};

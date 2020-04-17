---
title: Linaro News & Blogs
description: >-
    Search and filter the news and blog posts from all of our sites.
layout: base
permalink: /resources/news-and-blogs/
js-package: blog-search
css-package: resources-search
---
<div class="container-fluid responsive-background" id="header-container" style="background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/content/resources-header.png');">
    <div class="row overlay padded-row" id="resources">
        <div class="container text-center">
            <h1 class="center-block">Linaro News & Blogs</h1>
            <p class="center-block">
                We've pulled together all of our News and Blog posts so you don't have to. Use the search below to filter
                and search our resources.
            </p>
        </div>
    </div>
</div>

<div class="container-fluid" id="content-container">
    <div class="row hub-row">
        <!--Start Row-->
        <div class="container">
            <input type="text" class="form-control" placeholder="Search..." id="search-query">
            <!--Start Container-->
            <div style="overflow-x:scroll;">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Title (<span id="result_size"></span> of <span id="size"></span>)</th>
                            <th class="filter" data-toggle="desc" data-filter="author">Author<span class="caret"></span></th>
                            <th class="filter" data-toggle="desc" data-filter="date">Date Posted<span class="caret"></span></th>
                            <th>Post URL</th>
                            <th class="filter" data-toggle="desc" data-filter="site">Source<span class="caret"></span></th>
                        </tr>
                    </thead>
                    <tbody id="results">
                        <tr>
                            <td colspan="5" class="loader" style="text-align:center;">
                                <img src="/assets/images/content/linaro-loader.gif" class="img-responsive center-block"
                                    alt="Animated loading icon - dots circle" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
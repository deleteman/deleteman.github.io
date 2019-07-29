---
title: "Adding a custom login to your WordPress site in 2 easy steps"
comments: true
author:
    twitter: deleteman123
    name: Fernando Doglio
image: assets/images/blogposts/custom-wordpress-login.jpg
pinterestImage: /assets/images/pins/custom-wordpress-login-1.png

description: Adding a login-form to your WordPress site is really easy, but what about the rest? Role-based access, logout pages and so on. Read here everything you need to setup your member's only area in your WordPress site.
tags: [wordpress, tutorial, plugin]
redirect_from:
    - /2019/07/29/adding-login-form-to-wordpress.html
---
# Adding a custom login to your WordPress site in 2 easy steps
#### {{page.date | date: "%B %e, %Y"}}

<div class="post-header-img" markdown="1">
![Adding a custom login to your WordPress site in 2 easy steps](/assets/images/blogposts/custom-wordpress-login.jpg)
</div>


Having a member’s area is probably indication of a serious, well rounded online business. If you have exclusive content for your customers, then that might justify them paying you money to access it, right?. 
There are tons of ways to adding a custom login-form on a WordPress-based site, but the default one, is the worst. WordPress’ own login form is terrible and hard to customize, so why not try a plugin? After all, what is a WordPress site without plugins? Let’s not go there right now…



_Do you really want your login page to look like this?_
![Do you really want your login page to look like this?](/assets/images/blogposts/default-wp-login.png)


## Adding a quick plugin

Before we being, let me mention that if you’re on a [WordPress.com](http://www.WordPress.com) account, you’ll have to have a paying plan, it doesn’t have to be an expensive one mind you, you can simply do this with a $3 blogger plan, but in order to install plugins, you’ll have to pay *something* .
If on the other hand, you’re self-hosted, then all you have to do, is install the plugins I’ll mention here without the need to pay more for them.

Let’s now dive heads first, into adding a custom login page:

**1- Install Theme My Login**
There are *a lot* of plugins out there that’ll let you do this. In fact, if you’re already using [WPForms](https://www.shareasale.com/r.cfm?u=2099099&m=64312&b=834775) and paying for their Pro license, you might as well use them.
<div class="home-banner" markdown="1">
[![WPForms Giveaway](/assets/images/wpforms-giveaway.jpg)](/wpforms-giveaway)
</div>

But if you’re just looking for a quick and FREE way to do this, [Theme My Login](https://thememylogin.com) is the way to go.
Installing this plugin is simply a matter of looking for it inside the plugins section and hitting that “Install” button.


![Searching for Theme My Plugin](/assets/images/blogposts/looking-for-plugin.png)


After installing it, remember to do both:

1. Activate the plugin in the list of plugins section
2. Enable user registration on your site. You do this by going to your general settings and checking the “Anyone can register” checkbox.
![Allow new user registration on WordPress](/assets/images/blogposts/allow-register.png)


Once that is ready, you can move on to step #2.

**2- Creating your login page**
Wait, what? That’s IT?! It’s THAT simple, install and use, no fuzz, no buzz. 
The login page is where you can customize all you want, after all, it’s a normal page you can add with all the bells and whistles you think you need.

Here is mine:

![Custom Login page](/assets/images/blogposts/my-login.png)


I know, simple, yet I could literally customize it however I want, all the tools of the editor are there for you to pick. But the key part is the bottom of the content section, notice the brackets?

`[theme-my-login]` 

That is all you have to add, and it doesn’t have to be on one particular place inside your content, it can be *anywhere*, but once you add it the login form will appear. 
And now that you have your page ready, this is as good a time as any to make sure your routes match. And what I mean by this is that you should make sure the slug for your login page matches the slug the plugin is expecting and you can check that going the the plugin’s settings:


![Theme my Login settings](/assets/images/blogposts/plugin-settings.png)


And make sure the login slug matches your new page’s. In this section, you’ll notice you also have slugs for things like a *Log out* page, a *Register* page (also known as Sign Up page) and for a Lost and Reset password pages. 

If you're setting up a member’s area inside your site, these aren’t option, trust me, especially the Log out and Sign-up ones, otherwise you’ll never be able to let me register on your site and even if they did, they won’t be able to get out (which they might if they share a computer with others).
Now, the process for adding these other pages is *exactly the same*, the only thing changing in the tag you’ll need:


- `[theme-my-login action="register"]` for the sign-up page
- `[theme-my-login action="logout"]` for the log out page
- `[theme-my-login action="lostpassword"]` for the Lost Password page
- `[theme-my-login action="resetpass"]` for the Reset Password page

When adding the *Sign Up* page, you’ll notice how you’re not asked for a password. If you want your users to choose their own password, you’ll have to make sure to enable that setting.


## Extra configurations

Theme My Login works great by default, don’t get me wrong, *it gets the job done* but, at least in my case, there are a couple of things that make it even better once enabled.

**Allowing users to set their own password**
This is very easy to do, simply check that box on the plugin’s settings section, like this:


![Allow users to configure own password on Theme My Login](/assets/images/blogposts/allow-own-password.png)


As you can see, you can even let the plugin auto-login users once they’ve signed up.

**Setting the default user role**
So users are registering on your site, but why? What are they going to do once they do that? What’s their role? Are they editors in your own blog? Maybe even contributors? Or perhaps they’re members who can only access a set of restricted pages?
Whatever your answer to this question is, you can set it up on your site’s general settings:


![Setting default new user's role on WordPress](/assets/images/blogposts/default-role.png)


And this is especially important, because of the next section: adding member’s only content.


## Adding role-restricted content on WordPress

So, if you’ve followed up to this point, you might’ve noticed there is no easy way to configure a new page or a new post to only be visible to a set of users (a set specified by a role, mind you). By default, WordPress allows you to:

1. Make it public
2. Make it private (which means only admins or editors can see it)
3. Make it private behind a custom password

Neither one of these cases really matches up with our idea of a member’s exclusive area, but thanks to the Plugin ecosystem, we have options.
The folks that made Theme My Login, also have a plugin called [Restrictions,](https://thememylogin.com/extensions/restrictions/) bad sadly it’s not free, it’s actually $10 (USD dollars) for a single site, and it goes up from there. 
Worry not my friend, there are of course compatible and *FREE* alternatives, such as [WP-Private Content Plus](https://wordpress.org/plugins/wp-private-content-plus/) which allows you to setup role-based privacy controls over you content (and a lot more actually, feel free to check them out). They do offer a Pro license, but with their FREE one we can do pretty much everything we need.

**Setting up WP-Private Content Plus**
After installing this plugin (just like with every other plugin out there), and activating it from your plugins list section, you’ll want to enable it’s Private Content Module, otherwise nothing will work (the reason this is not enable by default escapes my mind BTW, really, why?!).

You can do this simply by going to the plugin’s settings and clicking a single checkbox:


![Enable Private Content Mode on WP-Private Content Plus](/assets/images/blogposts/enable-privacy.png)


Once that is taken care of, you can quickly start creating your member’s area.

**Configuring role-based access restrictions on your content**
Once installed, this plugin will add a set of privacy controls to your page and post editors, so you can simply click and choose who can see and you can’t your new pages.
There are several options, but if we’re going for a role-based approach, you can select “Selected User Roles” from the Visibility dropdown, and then pick and choose the allowed roles, as seen below:


![Role-based access restriction on WordPressl](/assets/images/blogposts/role-based-restrictions.png)



## And that is it!

Yeah, that was easy! In fact, setting up the login form is a crazy fast 2-step deal, but what others don’t really follow up on is what comes next. So hopefully in this quick article you’ve were able to learn everything you needed to provide your valued customers with a exclusive experience, and best of all, without having to spend a single dime!

Leave a comment below if you found this useful, I’d love to know if you were able to use it as well! And if you have other plugin recommendations out there, feel free to drop them down below as well!

*See you on the next one!* 

<div class="sharethis-inline-share-buttons"></div>
                        
{% include pin-it.html %}
{% include related.html %}
{% include disqus.html %}
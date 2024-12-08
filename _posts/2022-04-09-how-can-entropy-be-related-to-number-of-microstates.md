---
date: '2022-04-09'
draft: false
image: featured.html
tags:
- Article
title: How can Entropy be related to Number of Microstates?
---
[![](https://media.licdn.com/dms/image/C5612AQEPXXfxu66HRg/article-cover_image-shrink_423_752/0/1624616660913?e=1700697600&v=beta&t=eajIbnPjsoSL6d6fpQiiOB1amn9Yv8csmiFAq8YWRzc)](https://media.licdn.com/dms/image/C5612AQEPXXfxu66HRg/article-cover_image-shrink_423_752/0/1624616660913?e=1700697600&v=beta&t=eajIbnPjsoSL6d6fpQiiOB1amn9Yv8csmiFAq8YWRzc)

  

When I was first taught **Boltzman's Law,** I was very surprised. Entropy is a thermodynamic quantity, something like heat, temperature, and all that, what does it have to do with the position and momentum of all the particles? The number of microstates; position and momentum of all the particles, it seems more of Newtonian Physics than Thermodynamics. The other thing I was thinking how a quantity of big importance like entropy can be related to a **number?** I explored some of these questions and found the answers very amazing. Some more questions were asked and the answers were extraordinary. 

Before I start taking technical terms, I want to say that we will look at the system of inert gas, consisting of N non-interacting particles. They are in a box, the size of the particles is very less than the size of the system; the collisions are elastic so that there is no energy loss in collisions, and the collision time is very less than the time the particles are traveling. 

Microstates and Macrostates
---------------------------

We will start our discussion with an introduction to Microstate and Macrostate. A microstate is a complete description of every particle of the system. In our case, the microstate of the system would set of positions and momentum of every particle. A point in 6N dimensional phase space, a point represents a microstate. 

A macrostate means a broad description of the system without going into small details such that the position and momentum of every particle. Like specifying the energy, you are saying that I don't know the velocity of every particle but I know the total sum of their squares. This is a broad description that doesn't look into small details. 

The thing is there can be more than one microstate corresponding to one macrostate. If I say that some of the velocities of all particles are some constant v. I could mean that one particle is moving with speed v and others are at rest, that is a microstate; or it could mean that a second (different) particle is moving, that is a different microstate. So there are 'many' microstates possible corresponding to one macrostate. Every such microstate is a point in the phase space, so the macrostate is a collection of all such points. We can represent this as a closed volume in the phase space. When we say that the system is a macrostate, the possible microstate of the system lies in this enclosed volume. 

Time Reversal Symmetry
----------------------

The microstate of our system is the position and momentum of all the particles. So the microscopic laws of the system in Newton's Laws. Newton's laws allow us to predict the state of the system at any particular instance of time, given the state of the system now. Using these laws we can predict both future and past of the particle. In a sense Newton's laws are _time-symmetric_ they don't change under a transformation of t goes to -t. Even the very microscopic laws of Quantum Mechanics are also time-symmetric.

  

Let's take a particle moving with constant velocity. Let's say it is at position r(0) at time = 0. We let it evolve to time t, and it will be at some position r(t). Now I take it, reverse its velocity and let it evolve for another t. It will return at r(0). It's like recording the motion and playing it backward. But its processes are physically realizable. Looking at any video of one particle evolving in time, we can't tell if it is running forwards or backward. Because of the time-symmetric nature of microscopic laws of nature. 

  

But macroscopic views don't behave the same way. We record the motion of glass dropping from a height, we can see that it hits the ground and scatters into pieces. If we run the picture backward we will get a process that is not physically realizable. We don't see scattered pieces of glass coming together and forming a glass. And if we are shown a video randomly, we can easily tell if it is reversed. (Don't tell me examples of tik-tok videos in the comments!)

  

Let's say we take a bottle of perfume and open it empty. We can see that the atoms come out of the bottle and spread uniformly in the box. The gas will expand till it occupies all the volume and then it reaches equilibrium. Now if I take every atom and reverse its velocity, I can see that the atoms will go back to the bottle. But changing anything in the system as a whole will not make them go back to the bottle. The macroscopic laws behave differently than the microscopic laws. 

Arrow of Time
-------------

We see that the Arrow of time emerges when we switch from microstate to macrostate. But why? What is the Physical reason behind it? As I have said a macrostate is represented by a closed volume in phase space, the microstate of the system can be any point in this volume. As the microstate of this system evolves in time, the macrostate evolves as well. It can either expand or contract in the phase space, according to the situation. 

  

Now, we will take a look at the perfume bottle example. For fixed energy, the volume occupied by the atoms is a macrostate. As the momentum and positions of the atoms change, the volume also changes. This volume macrostate is represented by closed volume in phase space. It turns out that the volume in phase space is Nth power to the volume in ordinary space. 

  

Now the probability that the volume will change by dV will be G(V+dv)/G(V) where G(V) represents the volume in phase space corresponding to volume V, which will be equal to (V+dV)/V)^N. 

  

The number of particles in the perfume bottle will be of the order of Avogadro Number. That this number is sitting in the power. So no matter how small is dV, if dV is negative, this number is very less, practically zero. And if dV is positive, this number is very high almost unitary. So we can say that **The probability of expending a gas is one while contracting to a smaller volume is zero.** That makes sense because if there would have been even a small probability that the gas can contract, the air in our room would contract to a corner and we would die. (Thank God!!)

  

On the other hand, we think about a small number of particles, just one or two, we can say that the probability of contracting in phase space is also significant. It means that for small systems, or in other words on the microscopic scale, the processes can happen both ways, it is time-symmetric. 

  

At a large scale, physical processes are such that, they tend to acquire higher and higher volume in phase space (limited to constraints) and when they acquire the maximum volume available in phase space they are said to be in equilibrium. _All Physical processes happen in such a way that volume in phase space always increases._ (Does that remind you of something?)

  

This 'Volume in Phase Space' is an interesting quantity. When two processes are happening together, this volume gets multiplied. And we know that the entropy is additive in such a case, so we can say that Entropy is related to the log of  'Volume in Phase Space'. It's not hard to understand the volume in phase space just means the count of points  (Or grids in phase space that has something to do with the uncertainty principle) or the number of microstates. So here we arrive at the Famous Boltzmann Law. 

  

[![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Boltzmann_equation.JPG/220px-Boltzmann_equation.JPG)](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Boltzmann_equation.JPG/220px-Boltzmann_equation.JPG)

  

Entropy
=======

So in all this process, where does the entropy arise? When we look at the system from a macroscopic point of view, we are ignoring stuff very largely. So we are losing some information. And by just looking from the outside we can't tell what is going on inside. 

  

When I was first introduced to entropy in 11th class, Kamal ji sir gave this example to understand the concept of Entropy. Entropy is related to randomness, if I am in the class, students stay organized so there is less entropy, and as soon as I go outside, the entropy increases. 

  

Suppose, the principal has asked Kamal Ji to look after the 11th class. The microscopic point of view would be keeping an eye on every student, and the macroscopic point of view would be standing outside and ensuring that no one is leaving the class. Surely we are losing information. Now if there are only two or three students in the class, what entropy can they create. Now, if we are ninety students in class, there is Entropy. 

  

When Boltzmann first presented this idea, no one believed him. But now we know the importance of this concept. He found the relationship between two major fields of Physics, one is Mechanics and the other one is Thermodynamics. The found the answer to the question: since the governing laws of nature are time reversal, why don't we see time-reversal nature in life? He combined the microscopic and macroscopic points of view. His law S = k log W is still written on his grave tomb.
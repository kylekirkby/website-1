---
title: Artificial Intelligence
description: |-
    The Artificial Intelligence initiative at Linaro aims at collaborating to reduce fragmentation in the Deep learning NN acceleration ecosystem, where currently every IP vendor forks the existing open source models and frameworks to integrate their hardware blocks and then tune for performance.
keywords: Linaro, Aarch64, Performance, Kernel, assembly, Arm, Linux, hardware
image: /assets/images/content/Machine col.svg
permalink: /engineering/artificial-intelligence/
css-package: landing-page
js-package: engineering-landing-page
members:
    key: mi-incubator
related_resources_tracks: AI/Machine Learning
# related_resources_tracks: AI/Machine Learning, Machine Learning/AI, AI and Neural Networks on Arm Summit
related_tags:
  - Automotive
  - ML
  - AI/ML
  - Autoware
jumbotron:
    title: Artificial Intelligence
    title-class: big-title
    description: ""
    background-image: /assets/images/content/machine-learning-bg.jpg
layout: flow
flow:
  - row: container_row
    style: large_type introduction_row
    sections:
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            The Artificial Intelligence initiative at Linaro aims at collaborating to reduce fragmentation in the Deep learning NN acceleration ecosystem, where currently every IP vendor forks the existing open source models and frameworks to integrate their hardware blocks and then tune for performance. This leads to a duplication of effort amongst all players, perpetual cost of re-integration for every new rebasing, and overall increased total cost of ownership.
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            The initial focus is on the inference side on Cortex-A application processors with Linux and Android, both edge computing and  smart devices. As part of the remit, the team will collaborate on a definition of API and modular framework for an Arm runtime inference engine architecture based on plug-ins supporting dynamic modules and optimized shared Arm compute libraries.
  - row: container_row
    style: youtube_embed_row light_gray_row
    sections:
        - format: custom_include
          youtube_embed:
            url: https://www.youtube.com/watch?v=EHM-krkB42Y
            title: Introduction to the Linaro Artificial Intelligence Initiative
          source: components/lazy_youtube_video_embed.html
  - row: container_row
    style: large_type introduction_row
    sections:
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            Below are some of the Artificial Intelligence related sessions from the previous [Linaro Connect](https://connect.linaro.org):
  - row: main_content_row
  - row: custom_include_row
    source: engineering_related_resources.html
---

|Speaker|Company|ID|Title|
|-------|-------|--|-----|
|Chris Benson|AI Strategist|[YVR18- 300K2](https://youtu.be/bYSwYkmQJVo?t=1s)|Keynote: Artificial Intelligence Strategy: Digital Transformation Through Deep Learning|
|Jem Davies|Arm|[YVR18-300K1](https://youtu.be/bYSwYkmQJVo?t=31m15s)|Keynote: Enabling Machine Learning to Explode with Open Standards and Collaboration|
|Robert Elliott|Arm|[YVR18-329](https://www.youtube.com/watch?v=te-rJ5BVrtw)|Arm NN intro|
|Pete Warden|Google Tensorflow|[YVR18-338](https://www.youtube.com/watch?v=xYtw7fN2C88)|Tensorflow for Arm devices|
|Mark Charlebois|Qualcomm|[YVR18-330](https://www.youtube.com/watch?v=MgyfmaYhtLU)|Qualcomm Snapdragon AI Software|
|Thom Lane|Amazon AWS AI|[YVR18-331](https://www.youtube.com/watch?v=BDWlIew5pfo)|ONNX and Edge Deployments|
|Jammy Zhou|Linaro|[YVR18-332](https://www.youtube.com/watch?v=daYr4tpncFo)|TVM compiler stack and ONNX support|
|Luba Tang|Skymizer|[YVR18-333](https://www.youtube.com/watch?v=BDWlIew5pfo)|ONNC (Open Neural Network Compiler) for ARM Cortex-M|
|Shouyong Liu|Thundersoft|[YVR18-334](https://www.youtube.com/watch?v=CoBhUS9SL4U)|AI Alive: On Device and In-App|
|Ralph Wittig|Xilinx|[YVR18-335](https://www.youtube.com/watch?v=FimBHlcfhxA)|Xilinx: AI on FPGA and ACAP Roadmap|
|Andrea Gallo and others|Linaro, Arm, Qualcomm, Skymizer, Xilinx|[YVR18-337](https://www.youtube.com/watch?v=igH_OMSeIPI)|BoF: JIT vs offline compilers vs deploying at the Edge|

---
title: Designing Test Cases
description: Learn how to design experiments you can run to evaluate how well an AI tool will work for your specific goals
---

# Chapter 3: Designing Your Test Cases

Now that Alex has defined their goals for AI tool testing, it's time to design specific test cases. Think of test cases as experiments you'll run to see if an AI tool meets your needs. In this chapter, we'll walk through the process of creating diverse, representative, and challenging test cases.

## Creating Diverse and Representative Test Scenarios

Test cases should cover the range of tasks you expect the AI to handle. Let's look at how Alex might create diverse test cases for their top priority: lyric writing.

Example: Lyric Writing Test Cases

1. Generate opening lines for a love song
2. Create a chorus for a song about climate change
3. Write a verse describing a specific childhood memory
4. Develop lyrics with internal rhymes about city life
5. Craft a bridge section with a twist ending

Each of these cases tests a different aspect of lyric writing, from emotional content to structure to thematic elements.

Exercise: Brainstorm Scenarios
- For your top priority goal, list 5-7 different scenarios that cover various aspects of the task.
- Ensure your scenarios represent the full scope of what you'd use the AI tool for.

## Balancing Easy, Moderate, and Challenging Tests

It's important to include a range of difficulty in your test cases. This helps you understand the AI's capabilities and limitations.

Example: World-Building Test Cases (Varying Difficulty)

Easy:
1. Create a simple backstory for a character in a love song

Moderate:
2. Develop a fictional town setting for a song about small-town life
3. Design a futuristic society as a backdrop for a sci-fi themed song

Challenging:
4. Craft an entire alternate history timeline as context for a concept album
5. Create an interconnected universe spanning multiple songs, with consistent themes and motifs

Example: World-Building Test Cases (Varying Difficulty)

Easy:
1. Create a simple backstory for a character in a love song

Moderate:
2. Develop a fictional town setting for a song about small-town life
3. Design a futuristic society as a backdrop for a sci-fi themed song

Challenging:
4. Craft an entire alternate history timeline as context for a concept album
5. Create an interconnected universe spanning multiple songs, with consistent themes and motifs

Exercise: Categorize Difficulty
- Take your list of scenarios and categorize them as Easy, Moderate, or Challenging.
- Ensure you have at least one test case in each category.

## Ensuring Test Cases Cover All Aspects of Your Goals

Refer back to your success criteria from Chapter 2 and make sure your test cases will help you evaluate each criterion.

Example: Album Cover Design Test Cases

Success Criteria: At least 1 out of 3 designs captures the desired theme, looks professional, and requires minimal editing to use.

Test Cases:
1. Generate an abstract design incorporating nature and technology themes
2. Create a minimalist design using only typography and simple shapes
3. Produce a photorealistic design blending natural and urban elements
4. Design a retro-style cover with modern elements
5. Generate a cover that incorporates the band's logo into a nature scene

These cases test various styles and elements, allowing Alex to evaluate theme, professionalism, and ease of use.

Exercise: Map to Success Criteria
- Review your success criteria for your top goals.
- Ensure each criterion is addressed by at least one test case.
- If not, add new test cases to cover any gaps.

## Designing Specific and Detailed Test Cases

The more specific your test cases, the more useful your results will be. Let's look at how to add detail to a test case.

Example: Detailed Lyric Writing Test Case

Basic: Write a verse about childhood memories

Detailed: Write a 4-line verse about a summer childhood memory. Include a sensory detail (smell, taste, or touch) and a specific object from the 1990s. The lines should have an ABAB rhyme scheme and be suitable for a mid-tempo indie rock song.

The detailed version gives clear parameters, making it easier to evaluate the AI's output and compare results across different tools.

Exercise: Add Detail
- Choose one of your test cases and add specific details.
- Include parameters like length, style, specific elements to include, or constraints to follow.

## Creating a Test Case Template

To ensure consistency across your tests, it's helpful to use a template. Here's a simple template Alex might use:

Test Case Template:
1. Goal: [What are you testing?]
2. Specific Task: [Detailed description of what you want the AI to do]
3. Input: [What you'll provide to the AI, e.g., prompts, data]
4. Expected Output: [What you expect the AI to produce]
5. Success Criteria: [How you'll judge if the output is satisfactory]
6. Difficulty Level: [Easy, Moderate, or Challenging]

Example: Filled Test Case for Sentiment Analysis

1. Goal: Test AI's ability to analyze lyric sentiment
2. Specific Task: Analyze the emotional tone of a 3-verse song about a breakup
3. Input: Full lyrics of "It's Over Now" (Alex's recent song)
4. Expected Output: Breakdown of emotional tone for each verse and overall song, identifying specific words or phrases that contribute to the sentiment
5. Success Criteria: AI correctly identifies the shift from anger (verse 1) to sadness (verse 2) to acceptance (verse 3), with at least 3 specific word/phrase examples per verse
6. Difficulty Level: Moderate

Exercise: Create Your Template
- Develop a test case template that works for your needs.
- Fill it out for at least three of your test scenarios.

## Conclusion

By designing thorough and varied test cases, Alex has created a robust framework for evaluating AI tools. These test cases will provide concrete, specific feedback on how well each tool meets their needs.

Remember, good test case design is an iterative process. As you work with AI tools, you may discover new scenarios to test or ways to make your existing tests more effective. Don't be afraid to refine your test cases over time.

In the next chapter, we'll explore how to craft effective prompts to get the best results from your test cases. Get ready to communicate clearly with AI!
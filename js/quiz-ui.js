/**
 * Quiz UI Controller
 * 춤 DNA 테스트 설문 페이지의 UI 인터랙션을 관리합니다.
 *
 * Features:
 * - 스와이프 느낌의 질문 전환 애니메이션
 * - 선택 시 만족스러운 피드백
 * - 게이미피케이션된 프로그레스 바
 * - 터치/클릭 리플 효과
 */

import { quizData } from './quiz-data.js';
import { QuizEngine } from './quiz-engine.js';

class QuizUI {
    constructor() {
        // DOM Elements - Intro
        this.introScreen = document.getElementById('introScreen');
        this.startQuizBtn = document.getElementById('startQuizBtn');
        this.quizContainer = document.getElementById('quizContainer');

        // DOM Elements - Quiz
        this.questionWrapper = document.getElementById('questionWrapper');
        this.progressBar = document.getElementById('progressBar');
        this.progressText = document.getElementById('progressText');
        this.progressEmoji = document.getElementById('progressEmoji');
        this.backBtn = document.getElementById('backBtn');
        this.closeBtn = document.getElementById('closeBtn');
        this.exitModal = document.getElementById('exitModal');
        this.exitModalClose = document.getElementById('exitModalClose');
        this.continueTestBtn = document.getElementById('continueTestBtn');
        this.exitTestBtn = document.getElementById('exitTestBtn');

        // State
        this.currentQuestionIndex = 0;
        this.totalQuestions = quizData.questions.length;
        this.isAnimating = false;
        this.quizStarted = false;

        // Quiz Engine
        this.engine = new QuizEngine();

        // Progress emojis for gamification
        this.progressEmojis = [
            '🌱', '🌿', '🌳', '🌸', '🌺',
            '🌻', '🌈', '✨', '🔥', '💫',
            '🎆', '🎉', '🏆'
        ];

        // Initialize
        this.init();
    }

    init() {
        this.bindIntroEvents();
        this.bindEvents();
    }

    bindIntroEvents() {
        // Start Quiz Button
        this.startQuizBtn.addEventListener('click', () => this.startQuiz());

        // Allow Enter key to start
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !this.quizStarted) {
                this.startQuiz();
            }
        });
    }

    startQuiz() {
        if (this.quizStarted) return;
        this.quizStarted = true;

        // Fade out intro
        this.introScreen.classList.add('fade-out');

        // After animation, show quiz
        setTimeout(() => {
            this.introScreen.style.display = 'none';
            this.quizContainer.style.display = 'flex';
            this.quizContainer.classList.add('fade-in');

            // Initialize quiz content
            this.renderQuestion(this.currentQuestionIndex);
            this.updateProgress();
        }, 400);
    }

    bindEvents() {
        // Back button
        this.backBtn.addEventListener('click', () => this.goToPreviousQuestion());

        // Close button
        this.closeBtn.addEventListener('click', () => this.showExitModal());

        // Exit modal controls
        this.exitModalClose.addEventListener('click', () => this.hideExitModal());
        this.continueTestBtn.addEventListener('click', () => this.hideExitModal());
        this.exitTestBtn.addEventListener('click', () => this.exitQuiz());

        // Close modal on backdrop click
        this.exitModal.addEventListener('click', (e) => {
            if (e.target === this.exitModal) {
                this.hideExitModal();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (this.exitModal.classList.contains('active')) {
                    this.hideExitModal();
                } else {
                    this.showExitModal();
                }
            }
        });

        // Touch swipe support
        this.setupTouchSwipe();
    }

    setupTouchSwipe() {
        let touchStartX = 0;
        let touchEndX = 0;

        this.questionWrapper.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        this.questionWrapper.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        }, { passive: true });
    }

    handleSwipe(startX, endX) {
        const swipeThreshold = 80;
        const diff = startX - endX;

        if (Math.abs(diff) < swipeThreshold) return;

        if (diff < 0 && this.currentQuestionIndex > 0) {
            // Swipe right -> go back
            this.goToPreviousQuestion();
        }
        // Note: Swipe left to go forward is disabled - users must select an answer
    }

    renderQuestion(index) {
        const question = quizData.questions[index];
        const previousAnswer = this.engine.getAnswerForQuestion(index);

        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        questionCard.innerHTML = `
            <p class="question-number">Question ${index + 1} of ${this.totalQuestions}</p>
            <h2 class="question-text">${question.question}</h2>
            <div class="answers-grid">
                ${question.answers.map((answer, answerIndex) => `
                    <div class="answer-card ${previousAnswer === answerIndex ? 'selected' : ''}"
                         data-answer-index="${answerIndex}"
                         role="button"
                         tabindex="0"
                         aria-pressed="${previousAnswer === answerIndex}">
                        <div class="answer-content">
                            <span class="answer-icon">${String.fromCharCode(65 + answerIndex)}</span>
                            <span class="answer-text">${answer.text}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Clear and append
        this.questionWrapper.innerHTML = '';
        this.questionWrapper.appendChild(questionCard);

        // Bind answer click events
        this.bindAnswerEvents(questionCard, question, index);
    }

    bindAnswerEvents(questionCard, question, questionIndex) {
        const answerCards = questionCard.querySelectorAll('.answer-card');

        answerCards.forEach((card) => {
            const handleSelection = (e) => {
                if (this.isAnimating) return;

                const answerIndex = parseInt(card.dataset.answerIndex);
                this.selectAnswer(card, answerCards, question, questionIndex, answerIndex, e);
            };

            card.addEventListener('click', handleSelection);
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelection(e);
                }
            });
        });
    }

    selectAnswer(selectedCard, allCards, question, questionIndex, answerIndex, event) {
        // Create ripple effect
        this.createRipple(selectedCard, event);

        // Update visual state
        allCards.forEach(card => card.classList.remove('selected'));
        selectedCard.classList.add('selected');

        // Record answer
        this.engine.recordAnswer(questionIndex, answerIndex, question.answers[answerIndex].scores);

        // Haptic feedback if supported
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }

        // Delay before transition
        setTimeout(() => {
            this.goToNextQuestion();
        }, 400);
    }

    createRipple(element, event) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';

        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        let x, y;
        if (event.touches) {
            x = event.touches[0].clientX - rect.left - size / 2;
            y = event.touches[0].clientY - rect.top - size / 2;
        } else {
            x = event.clientX - rect.left - size / 2;
            y = event.clientY - rect.top - size / 2;
        }

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        element.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    }

    goToNextQuestion() {
        if (this.isAnimating) return;

        if (this.currentQuestionIndex >= this.totalQuestions - 1) {
            // Quiz complete - save and redirect to results
            this.completeQuiz();
            return;
        }

        this.isAnimating = true;
        const currentCard = this.questionWrapper.querySelector('.question-card');

        // Animate out
        currentCard.classList.add('slide-out-left');

        setTimeout(() => {
            this.currentQuestionIndex++;
            this.updateProgress();
            this.renderQuestion(this.currentQuestionIndex);

            const newCard = this.questionWrapper.querySelector('.question-card');
            newCard.classList.add('slide-in-right');

            setTimeout(() => {
                newCard.classList.remove('slide-in-right');
                this.isAnimating = false;
            }, 400);
        }, 400);
    }

    goToPreviousQuestion() {
        if (this.isAnimating || this.currentQuestionIndex === 0) return;

        this.isAnimating = true;
        const currentCard = this.questionWrapper.querySelector('.question-card');

        // Animate out
        currentCard.classList.add('slide-out-right');

        setTimeout(() => {
            this.currentQuestionIndex--;
            this.updateProgress();
            this.renderQuestion(this.currentQuestionIndex);

            const newCard = this.questionWrapper.querySelector('.question-card');
            newCard.classList.add('slide-in-left');

            setTimeout(() => {
                newCard.classList.remove('slide-in-left');
                this.isAnimating = false;
            }, 400);
        }, 400);
    }

    updateProgress() {
        const answered = this.engine.getProgress(this.totalQuestions).answered;
        const percentage = ((this.currentQuestionIndex) / this.totalQuestions) * 100;

        // Update progress bar with animation
        this.progressBar.style.width = `${percentage}%`;

        // Update text
        this.progressText.textContent = `${this.currentQuestionIndex} / ${this.totalQuestions}`;

        // Update emoji based on progress
        const emojiIndex = Math.min(
            Math.floor((this.currentQuestionIndex / this.totalQuestions) * this.progressEmojis.length),
            this.progressEmojis.length - 1
        );
        this.progressEmoji.textContent = this.progressEmojis[emojiIndex];

        // Update back button state
        this.backBtn.disabled = this.currentQuestionIndex === 0;
    }

    completeQuiz() {
        // Calculate final result
        const result = this.engine.calculateResult();

        // Save result to localStorage
        this.engine.saveResult(result);

        // Add completion animation
        this.progressBar.style.width = '100%';
        this.progressEmoji.textContent = '🏆';
        this.progressText.textContent = `${this.totalQuestions} / ${this.totalQuestions}`;

        // Redirect to results page after brief delay
        setTimeout(() => {
            window.location.href = 'result.html';
        }, 600);
    }

    showExitModal() {
        this.exitModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    hideExitModal() {
        this.exitModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    exitQuiz() {
        // Clear progress and go to home
        this.engine.clearResult();
        window.location.href = 'index.html';
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new QuizUI();
});

export default QuizUI;

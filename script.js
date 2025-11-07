// Mobile Navigation Toggle
const navToggle = document.getElementById("navToggle")
const navMenu = document.getElementById("navMenu")
const navLinks = document.querySelectorAll(".nav-link")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")

  // Animate hamburger
  const spans = navToggle.querySelectorAll("span")
  if (navMenu.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
    spans[1].style.opacity = "0"
    spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
  } else {
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  }
})

// Close mobile menu when link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    const spans = navToggle.querySelectorAll("span")
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  })
})

// Navbar scroll effect
const navbar = document.getElementById("navbar")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  lastScroll = currentScroll
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 70
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
const animateElements = document.querySelectorAll(".value-card, .program-card, .team-card, .quick-link-card")
animateElements.forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Contact form handling
const contactForm = document.getElementById("contactForm")
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Show success message (in a real implementation, you would send this to a server)
  alert("Thank you for your message! We will get back to you soon.")
  contactForm.reset()
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero-content")
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`
    hero.style.opacity = 1 - scrolled / 700
  }
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease"
    document.body.style.opacity = "1"
  }, 100)
})

// Donate button alerts (placeholder functionality)
const donateButtons = document.querySelectorAll(".donate-buttons .btn")
donateButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault()
    if (button.textContent.includes("Donation")) {
      alert(
        "Thank you for your interest in donating! This would redirect to a payment gateway in the full implementation.",
      )
    } else {
      alert(
        "Thank you for your interest in becoming a partner! This would open a partnership form in the full implementation.",
      )
    }
  })
})

// Active navigation link highlighting
const sections = document.querySelectorAll("section[id]")

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 100
    const sectionId = section.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add("active")
    } else {
      document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.remove("active")
    }
  })
})

// Add hover effects to program cards
const programCards = document.querySelectorAll(".program-card")
programCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px) scale(1.01)"
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)"
  })
})

// Counter animation for stats (if you want to add statistics later)
function animateCounter(element, target, duration) {
  let start = 0
  const increment = target / (duration / 16)

  const timer = setInterval(() => {
    start += increment
    if (start >= target) {
      element.textContent = target
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(start)
    }
  }, 16)
}

function animateCounters() {
  const counters = document.querySelectorAll(".stat-number")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("data-target"))
    const duration = 2000
    const increment = target / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        counter.textContent = target.toLocaleString() + "+"
        clearInterval(timer)
      } else {
        counter.textContent = Math.floor(current).toLocaleString()
      }
    }, 16)
  })
}

// Trigger counter animation when hero section is visible
const heroObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters()
        heroObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.5 },
)

const heroStats = document.querySelector(".hero-stats")
if (heroStats) {
  heroObserver.observe(heroStats)
}

console.log("%cYNIS-RD Website", "color: #047857; font-size: 24px; font-weight: bold;")
console.log("%cInnovate. Empower. Transform.", "color: #10b981; font-size: 16px; font-style: italic;")

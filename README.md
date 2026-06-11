# 🚀 Smart Job Application Form - Angular 21

A modern Angular 21 application demonstrating **Reactive Forms from Basic to Advanced**, covering most of the concepts frequently asked in Angular interviews and used in real-world enterprise applications.

---

## 📌 Overview

This project simulates a real-world **Job Application Portal** and showcases how Reactive Forms are used in enterprise applications.

Instead of creating a simple form, this application demonstrates:

- Dynamic form fields
- Real-time validation
- Async validation
- FormArray
- Conditional rendering
- Auto-save drafts
- Dependent dropdowns
- RxJS integration
- Custom validators

This project is ideal for Angular developers preparing for **product-based company interviews**.

---

## ✨ Features

### Reactive Forms

- FormGroup
- FormControl
- FormArray
- Validators
- Async Validators
- Dynamic Validators

### Real-Time Functionality

- Live Validation
- Dynamic Form Fields
- Conditional Rendering
- Auto Save Draft
- Country → State Dependent Dropdown
- Email Availability Check
- Dynamic Skill Addition/Removal

### Angular Concepts

- Standalone Components
- Dependency Injection
- Reactive Forms
- Angular 21 Control Flow Syntax (`@if`, `@for`)
- Services
- Custom Validators

### RxJS Concepts

- valueChanges
- debounceTime
- Observables
- Async Validation

---

## 🎯 Use Case

Imagine a company recruitment portal where candidates need to:

- Fill personal details
- Select country and state
- Choose employment type
- Enter experience details
- Add multiple skills
- Validate email availability
- Save progress automatically

This project implements all of these requirements using Angular Reactive Forms.

---

## 🏗 Project Structure

```text
src/
│
├── app/
│
├── features/
│   └── job-application/
│       ├── job-application.ts
│       ├── job-application.html
│       └── job-application.scss
│
├── services/
│   ├── job-form.service.ts
│   └── email-validator.service.ts
│
├── validators/
│   └── phone.validator.ts
│
├── models/
│   └── country.model.ts
│
└── app.routes.ts
```

---

## 🛠 Tech Stack

- Angular 21
- TypeScript
- SCSS
- RxJS
- Reactive Forms

---

## 📚 Concepts Covered

### FormGroup

Represents the entire form.

```ts
form = this.fb.group({
  name: [''],
  email: ['']
});
```

---

### FormControl

Represents a single field.

```ts
name: ['']
```

---

### FormArray

Used for dynamic fields.

```ts
skills: this.fb.array([])
```

Example:

- Angular
- React
- TypeScript
- JavaScript

Users can add or remove skills dynamically.

---

### Custom Validator

Phone number validation.

```ts
phoneValidator()
```

Valid:

```text
9876543210
```

Invalid:

```text
98765
```

---

### Async Validator

Checks email availability.

```ts
emailExistsValidator()
```

Example:

```text
admin@gmail.com ❌
john@gmail.com ✅
```

---

### Dynamic Validation

When user selects:

```text
Employment Type = Experienced
```

Additional fields become mandatory:

- Company Name
- Experience

Implemented using:

```ts
addValidators()
clearValidators()
updateValueAndValidity()
```

---

### Dependent Dropdowns

```text
Country
   ↓
State
```

Example:

```text
India
   ↓
Delhi
Mumbai
Bangalore
```

Implemented using:

```ts
valueChanges
```

---

### Auto Save Draft

Whenever user updates the form:

```text
Type
↓
Pause 1 second
↓
Auto Save
```

Implemented using:

```ts
debounceTime(1000)
```

and

```ts
localStorage
```

---

## 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/your-username/smart-job-application-form.git
```

### Navigate to Project

```bash
cd smart-job-application-form
```

### Install Dependencies

```bash
npm install
```

### Run Application

```bash
ng serve
```

### Open Browser

```text
http://localhost:4200
```

---

## 📋 Form Workflow

### Step 1

Enter:

- Name
- Email
- Phone

---

### Step 2

Select:

- Country
- State

State options change automatically based on selected country.

---

### Step 3

Choose Employment Type

Options:

- Fresher
- Experienced

If Experienced:

- Company Name
- Years of Experience

Fields become visible dynamically.

---

### Step 4

Add Skills

Examples:

- Angular
- React
- JavaScript
- TypeScript

Users can add unlimited skills using FormArray.

---

### Step 5

Submit Application

All validations are checked before submission.

---

## 🎓 Interview Questions Covered

### Beginner Level

- What is Reactive Form?
- What is FormGroup?
- What is FormControl?
- Difference between Template Driven and Reactive Forms?

### Intermediate Level

- What is FormArray?
- Difference between patchValue and setValue?
- How does valueChanges work?
- Why use debounceTime?

### Advanced Level

- Dynamic Validators
- Async Validators
- Custom Validators
- Conditional Rendering
- Dynamic Forms
- Auto Save Functionality
- Dependent Dropdowns
- FormArray Management

---

## 🔥 Future Enhancements

### Multi-Step Form Wizard

```text
Step 1 → Personal Details

Step 2 → Experience

Step 3 → Skills

Step 4 → Review & Submit
```

---

### Resume Upload

Validation:

- PDF Only
- Max Size 5MB

---

### Backend Integration

Possible APIs:

- Spring Boot
- Node.js
- .NET

---

### Searchable Dropdowns

Examples:

- Search Country
- Search State
- Search Skills

---

### Real API Integration

Replace mock email validation with:

```http
GET /api/users/check-email
```

---

## 💡 Why This Project?

Most Angular interviews focus on:

- Reactive Forms
- FormArray
- Validators
- RxJS
- Dynamic Forms

This project combines all of these concepts into one practical application.

By building this project from scratch, developers can gain confidence in handling real-world forms and answering Angular interview questions asked in product-based companies.

---

## ⭐ If You Like This Project

Please consider:

- ⭐ Starring the repository
- 🍴 Forking the repository
- 📚 Using it for interview preparation

---

## 👨‍💻 Author

Frontend Developer passionate about Angular, React, TypeScript, JavaScript, and Frontend Architecture.

Built for learning, interview preparation, and mastering Angular Reactive Forms.

Happy Coding! 🚀

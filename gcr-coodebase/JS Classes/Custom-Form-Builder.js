/**
 * Question 4: Custom Form Builder
 * Dynamically builds HTML forms from field configurations using a FormBuilder class.
 */

class FormBuilder {
    constructor(fieldConfigurations) {
        this.fields = fieldConfigurations;
    }

    renderHTML() {
        let html = '<form id="dynamicGeneratedForm" class="p-3">';
        this.fields.forEach(field => {
            html += `
            <div class="field-container" style="margin-bottom: 12px;">
                <label style="display:block; font-weight:600; margin-bottom:4px;">${field.label}</label>
                <input type="${field.type}" name="${field.name}" id="${field.name}" placeholder="${field.placeholder || ''}" style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px;" />
            </div>`;
        });
        html += '<button type="submit" style="background:#2563eb; color:white; padding:10px 16px; border:none; border-radius:4px; cursor:pointer;">Submit</button>';
        html += '</form>';
        return html;
    }

    getFormData(formElement) {
        const formData = new FormData(formElement);
        const valuesObject = {};
        formData.forEach((value, key) => {
            valuesObject[key] = value;
        });
        return valuesObject;
    }
}

// Field specifications
const userFormConfig = [
    { type: 'text', label: 'Username', name: 'username', placeholder: 'Enter username' },
    { type: 'email', label: 'Email Address', name: 'email', placeholder: 'Enter email' },
    { type: 'password', label: 'Password', name: 'password', placeholder: 'Choose password' }
];

const builder = new FormBuilder(userFormConfig);
console.log("=== Dynamic Form HTML Generated ===");
console.log(builder.renderHTML());

// Mock simulation of getFormData
const mockFormResult = { username: "nishant688", email: "nishant@example.com", password: "SecretPassword1" };
console.log("\n=== Sample getFormData() Output ===", mockFormResult);

# Google Forms Integration Setup Guide

## 🎯 **What I've Implemented:**

Your quote form now has **BOTH** options:
1. **Custom Styled Form** - Beautiful design that submits to Google Forms
2. **Google Form Fallback** - Direct iframe embed as backup

## 🔧 **Setup Steps:**

### **Step 1: Get Your Google Form Field IDs**

1. Open your Google Form: https://docs.google.com/forms/d/e/1FAIpQLScTZ18ZgsIsHHQSfhEjcm7UuEbSYO0xU59pJqBxaR9sAbNi7g/viewform
2. Right-click on each field and select "Inspect Element"
3. Look for `name="entry.XXXXXXXXX"` in the HTML
4. Copy these IDs for each field

### **Step 2: Update Field Mappings**

#### **Quote Form (`src/pages/QuoteForm.js`):**
Find this section and replace the placeholder IDs:

```javascript
const fieldMappings = {
  'entry.123456789': formObject.name,           // Replace with actual field ID
  'entry.987654321': formObject.email,          // Replace with actual field ID
  'entry.111222333': formObject.phone,          // Replace with actual field ID
  'entry.444555666': formObject.service,        // Replace with actual field ID
  'entry.777888999': formObject.projectDescription, // Replace with actual field ID
  'entry.666777888': formObject.additionalInfo  // Replace with actual field ID
};
```

#### **Contact Form (`src/pages/Contact.js`):**
Find this section and replace the placeholder IDs:

```javascript
const fieldMappings = {
  'entry.123456789': formObject.name,           // Replace with actual field ID
  'entry.987654321': formObject.email,          // Replace with actual field ID
  'entry.111222333': formObject.phone,          // Replace with actual field ID
  'entry.444555666': formObject.service,        // Replace with actual field ID
  'entry.777888999': formObject.message         // Replace with actual field ID
};
```

### **Step 3: Test the Integration**

1. Fill out the custom form
2. Submit - data should go to your Google Form
3. Check your Google Form responses to confirm

## 📋 **Form Fields to Map:**

### **Quote Form Fields:**
| Custom Form Field | Google Form Field Type | Notes |
|------------------|----------------------|-------|
| Full Name | Short answer | Required |
| Email Address | Email | Required |
| Phone Number | Phone number | Required |
| Service Needed | Multiple choice | Required |
| Project Description | Paragraph | Required |
| Additional Information | Paragraph | Optional |

### **Contact Form Fields:**
| Custom Form Field | Google Form Field Type | Notes |
|------------------|----------------------|-------|
| Full Name | Short answer | Required |
| Email Address | Email | Required |
| Phone Number | Phone number | Optional |
| Service Interest | Multiple choice | Optional |
| Message | Paragraph | Required |

## 🚨 **Important Notes:**

- **Field IDs are unique** - each Google Form has different entry numbers
- **Test thoroughly** - make sure all fields submit correctly
- **Fallback available** - users can use the Google Form directly if needed
- **Custom styling preserved** - your beautiful form design stays intact

## 🔍 **Troubleshooting:**

If the custom form doesn't work:
1. Check browser console for errors
2. Verify field IDs are correct
3. Test the fallback Google Form
4. Ensure your Google Form accepts submissions

## 💡 **Benefits of This Setup:**

✅ **Beautiful custom styling** - Your form looks professional  
✅ **Google Forms integration** - Data goes to your Google Sheets  
✅ **Fallback option** - Users can submit either way  
✅ **No backend needed** - Everything works with Google Forms  
✅ **Easy to manage** - View submissions in Google Sheets  

Your form now combines the best of both worlds - beautiful design AND functional data collection!

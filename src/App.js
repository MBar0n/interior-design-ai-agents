import React, { useState } from 'react';

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans text-gray-800">
      {/* Header/Hero Section */}
      <header className="py-16 px-4 text-center bg-white shadow-lg rounded-b-3xl mb-12">
        {/* Logo Added Here */}
        <img
          src="/download/uploaded:Imprint Logo_White Background.png-24055236-0024-4eae-84aa-4d46fd3f3a63" // Updated with your new Imprint Logo URL
          alt="Imprint Logo"
          className="mx-auto mb-6 h-16 object-contain animate-fade-in-down"
        />
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4 animate-fade-in-down">
          Your AI Automation Partner for Interior Design
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up text-center"> {/* Added text-center here */}
          Streamline your workflow, reduce administrative burden, <br />
          and focus on what you do best!
        </p>
        <div className="mt-8">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            Request a Demo
          </button>
        </div>
      </header>

      {/* New text section before widgets */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">
          Customisable AI agents available for any task at hand.
        </h2>
        <p className="text-lg text-gray-700">See what is possible below!</p>
      </div>

      {/* Widgets Section */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <ProductScout />
          <ClientCommunicator />
          <InvoiceGenerator />
          <ContractCreator />
          <ProjectTracker />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600 mt-12">
        <p>&copy; 2025 Your AI Automation Business. All rights reserved.</p>
      </footer>
    </div>
  );
}

// 1. Product Scout Widget
function ProductScout() {
  const [category, setCategory] = useState('');
  const [style, setStyle] = useState('');
  const [budget, setBudget] = useState('');
  const [room, setRoom] = useState('');
  const [features, setFeatures] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleSearch = () => {
    setIsLoading(true);
    setResults(null); // Clear previous results
    setTimeout(() => {
      // Simulate AI response with placeholder data
      setResults([
        {
          name: 'Elegant Velvet Mid-Century Sofa',
          style: 'Mid-Century Modern',
          material: 'Velvet',
          price: '$1,800 - $2,200',
          image: 'https://placehold.co/400x300/e0e7ff/4338ca?text=Sofa+Placeholder'
        },
        {
          name: 'Industrial Loft Pendant Light',
          style: 'Industrial',
          material: 'Steel, Glass',
          price: '$250 - $350',
          image: 'https://placehold.co/400x300/e0e7ff/4338ca?text=Light+Placeholder'
        },
        {
          name: 'Minimalist Oak Dining Chair',
          style: 'Minimalist',
          material: 'Solid Oak',
          price: '$150 - $200 (per chair)',
          image: 'https://placehold.co/400x300/e0e7ff/4338ca?text=Chair+Placeholder'
        },
      ]);
      setIsLoading(false);
    }, 2000); // Simulate network delay
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-200 transform hover:scale-[1.01] transition duration-300 ease-in-out">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center">
        <span className="mr-3">✨</span> AI Product Scout
      </h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700 mb-1">I'm looking for a...</label>
          <select
            id="productCategory"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Sofa">Sofa</option>
            <option value="Chair">Chair</option>
            <option value="Lighting">Lighting</option>
            <option value="Rug">Rug</option>
            <option value="Table">Table</option>
            <option value="Cabinet">Cabinet</option>
            <option value="Decor">Decor</option>
          </select>
        </div>
        <div>
          <label htmlFor="stylePreference" className="block text-sm font-medium text-gray-700 mb-1">Style Preference:</label>
          <select
            id="stylePreference"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
          >
            <option value="">Select Style</option>
            <option value="Mid-Century Modern">Mid-Century Modern</option>
            <option value="Boho">Boho</option>
            <option value="Minimalist">Minimalist</option>
            <option value="Industrial">Industrial</option>
            <option value="Traditional">Traditional</option>
            <option value="Contemporary">Contemporary</option>
          </select>
        </div>
        <div>
          <label htmlFor="budgetRange" className="block text-sm font-medium text-gray-700 mb-1">Budget Range:</label>
          <select
            id="budgetRange"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="">Select Budget</option>
            <option value="Budget-Friendly">Budget-Friendly</option>
            <option value="Mid-Range">Mid-Range</option>
            <option value="Premium">Premium</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>
        <div>
          <label htmlFor="forRoom" className="block text-sm font-medium text-gray-700 mb-1">For which Room?</label>
          <select
            id="forRoom"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          >
            <option value="">Select Room</option>
            <option value="Living Room">Living Room</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Dining Room">Dining Room</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Office">Office</option>
            <option value="Bathroom">Bathroom</option>
          </select>
        </div>
        <div>
          <label htmlFor="keyFeatures" className="block text-sm font-medium text-gray-700 mb-1">Key Features/Materials (e.g., "velvet, tufted"):</label>
          <input
            type="text"
            id="keyFeatures"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            placeholder="e.g., 'leather, tufted', 'brass, modern'"
          />
        </div>
        <button
          onClick={handleSearch}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-200 ease-in-out flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <span className="mr-2">🔍</span>
          )}
          {isLoading ? 'Searching...' : 'Find Products'}
        </button>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">AI Suggestions:</h3>
        {results === null && !isLoading && (
          <p className="text-gray-500">Enter your criteria above and click "Find Products" to see suggestions.</p>
        )}
        {isLoading && (
          <p className="text-indigo-500 flex items-center">
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Searching for perfect pieces...
          </p>
        )}
        {results && results.length > 0 && (
          <div className="space-y-6">
            {results.map((product, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center bg-blue-50 p-4 rounded-lg shadow-sm">
                <img src={product.image} alt={product.name} className="w-full sm:w-24 h-24 object-cover rounded-md mr-4 mb-4 sm:mb-0" onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/100x100/e0e7ff/4338ca?text=Product`; }} />
                <div className="flex-grow">
                  <h4 className="font-semibold text-lg text-indigo-700">{product.name}</h4>
                  <p className="text-sm text-gray-600">Style: {product.style} | Material: {product.material}</p>
                  <p className="text-sm text-gray-600">Est. Price: {product.price}</p>
                  {/* FIX: Changed href to a placeholder URL */}
                  <a href="https://example.com/product-details" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline text-sm mt-1 inline-block">View Details (Example)</a>
                </div>
              </div>
            ))}
            <p className="text-gray-500 text-sm mt-4">Want more? Refine your search above or connect with us!</p>
          </div>
        )}
      </div>
    </div>
  );
}

// 2. Client Communicator Widget
function ClientCommunicator() {
  const [clientName, setClientName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [purpose, setPurpose] = useState('');
  const [keyPoints, setKeyPoints] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [draftMessage, setDraftMessage] = useState(null);

  const handleDraft = () => {
    setIsLoading(true);
    setDraftMessage(null); // Clear previous draft
    setTimeout(() => {
      // Simulate AI response with placeholder data
      // FIX: Removed unused 'date' variable
      let subject = `Project Update - ${projectName || 'Your Project'}`;
      let body = `Dear ${clientName || 'Client Name'},

Hope you're having a great week.

Just wanted to provide a quick update on the ${projectName || 'project'}. The overall design phase is progressing well, and we're excited about the direction.

${keyPoints ? `Regarding your notes: ${keyPoints}\n\n` : ''}We've received an update from the supplier regarding the living room sofa; it's now expected to arrive by [Date Placeholder - e.g., end of next week], slightly later than initially anticipated. We'll keep you closely informed of its tracking.

To keep things moving forward on the design, we're awaiting your final decision on the master bedroom paint color. Please let us know your preference by [Date Placeholder - e.g., Friday] so we can proceed with ordering.

Please feel free to reach out if you have any questions.

Best regards,
[Your Company Name / Your Name]`;

      if (purpose === 'Feedback Request') {
        subject = `Feedback Request - ${projectName || 'Your Project'}`;
        body = `Dear ${clientName || 'Client Name'},

Hope you're having a great week.

We've completed the initial design concepts for the ${projectName || 'project'} and are excited to share them with you.

We've attached the design proposal for your review. Please provide your feedback on the proposed layouts, color schemes, and material selections by [Date Placeholder - e.g., end of week]. Your input is crucial to ensure we're aligning with your vision.

${keyPoints ? `Specific points to consider: ${keyPoints}\n\n` : ''}Please let us know if you have any questions or would like to schedule a call to discuss.

Best regards,
[Your Company Name / Your Name]`;
      } else if (purpose === 'Invoice Follow-up') {
        subject = `Follow-up: Invoice for ${projectName || 'Your Project'}`;
        body = `Dear ${clientName || 'Client Name'},

Hope you're well.

This is a friendly reminder regarding invoice #[Invoice Number Placeholder] for the ${projectName || 'project'}, which was due on [Due Date Placeholder].

We've attached a copy of the invoice for your convenience. Please let us know if you have any questions or if there's anything we can assist with.

${keyPoints ? `Additional notes: ${keyPoints}\n\n` : ''}Thank you for your prompt attention to this.

Best regards,
[Your Company Name / Your Name]`;
      }

      setDraftMessage({ subject, body });
      setIsLoading(false);
    }, 2000);
  };

  const handleCopy = () => {
    if (draftMessage) {
      const textToCopy = `Subject: ${draftMessage.subject}\n\n${draftMessage.body}`;
      // Using document.execCommand('copy') for better iframe compatibility
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        alert('Message copied to clipboard!'); // Using alert for prototype, replace with custom modal
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-200 transform hover:scale-[1.01] transition duration-300 ease-in-out">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center">
        <span className="mr-3">✉️</span> AI Client Communicator
      </h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 mb-1">Client Name:</label>
          <input
            type="text"
            id="clientName"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="e.g., Sarah & John Miller"
          />
        </div>
        <div>
          <label htmlFor="projectNameComm" className="block text-sm font-medium text-gray-700 mb-1">Project Name/ID:</label>
          <input
            type="text"
            id="projectNameComm"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="e.g., Greenwich Residence Refurbishment"
          />
        </div>
        <div>
          <label htmlFor="purposeComm" className="block text-sm font-medium text-gray-700 mb-1">Purpose of Communication:</label>
          <select
            id="purposeComm"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          >
            <option value="">Select Purpose</option>
            <option value="Weekly Update">Weekly Update</option>
            <option value="Feedback Request">Feedback Request</option>
            <option value="Invoice Follow-up">Invoice Follow-up</option>
            <option value="Design Proposal">Design Proposal</option>
          </select>
        </div>
        <div>
          <label htmlFor="keyPoints" className="block text-sm font-medium text-gray-700 mb-1">Key Points to Include (Optional):</label>
          <textarea
            id="keyPoints"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 h-24"
            value={keyPoints}
            onChange={(e) => setKeyPoints(e.target.value)}
            placeholder="e.g., 'Delays with sofa delivery, need final decision on paint color.'"
          ></textarea>
        </div>
        <button
          onClick={handleDraft}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-200 ease-in-out flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <span className="mr-2">✍️</span>
          )}
          {isLoading ? 'Drafting...' : 'Draft Message'}
        </button>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">AI Drafted Message:</h3>
        {draftMessage === null && !isLoading && (
          <p className="text-gray-500">Enter details above and click "Draft Message" to generate.</p>
        )}
        {isLoading && (
          <p className="text-indigo-500 flex items-center">
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Crafting your message...
          </p>
        )}
        {draftMessage && (
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-indigo-700 mb-2">Subject: {draftMessage.subject}</p>
            <textarea
              readOnly
              className="w-full h-48 p-2 border border-gray-300 rounded-md bg-white text-sm resize-none"
              value={draftMessage.body}
            ></textarea>
            <button
              onClick={handleCopy}
              className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg shadow-sm transition duration-200 ease-in-out flex items-center"
            >
              <span className="mr-2">📋</span> Copy to Clipboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// 3a. Invoice Generator Widget
function InvoiceGenerator() {
  const [clientName, setClientName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [lineItems, setLineItems] = useState([{ description: '', qty: 1, unitPrice: 0 }]);
  const [isLoading, setIsLoading] = useState(false);
  const [invoiceLink, setInvoiceLink] = useState(null);

  const handleAddLineItem = () => {
    setLineItems([...lineItems, { description: '', qty: 1, unitPrice: 0 }]);
  };

  const handleLineItemChange = (index, field, value) => {
    const newLineItems = [...lineItems];
    newLineItems[index][field] = value;
    setLineItems(newLineItems);
  };

  const handleGenerateInvoice = () => {
    setIsLoading(true);
    setInvoiceLink(null); // Clear previous link
    setTimeout(() => {
      // Simulate invoice generation
      const invoiceId = `INV-${Math.floor(Math.random() * 100000)}`;
      const total = lineItems.reduce((sum, item) => sum + (item.qty * item.unitPrice), 0).toFixed(2);
      setInvoiceLink({
        id: invoiceId,
        total: total,
        url: `https://placehold.co/600x400/e0e7ff/4338ca?text=Invoice+${invoiceId}` // Placeholder PDF link
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-200 transform hover:scale-[1.01] transition duration-300 ease-in-out">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center">
        <span className="mr-3">🧾</span> AI Invoice Generator
      </h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="clientNameInv" className="block text-sm font-medium text-gray-700 mb-1">Client Name/ID:</label>
          <input
            type="text"
            id="clientNameInv"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="e.g., Acme Design Co."
          />
        </div>
        <div>
          <label htmlFor="projectNameInv" className="block text-sm font-medium text-gray-700 mb-1">Project Name/ID:</label>
          <input
            type="text"
            id="projectNameInv"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="e.g., Downtown Office Fit-out"
          />
        </div>
        <div>
          <label htmlFor="dueDateInv" className="block text-sm font-medium text-gray-700 mb-1">Invoice Due Date:</label>
          <input
            type="date"
            id="dueDateInv"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Line Items:</label>
          {lineItems.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                className="flex-grow p-2 border border-gray-300 rounded-lg text-sm"
                placeholder="Description"
                value={item.description}
                onChange={(e) => handleLineItemChange(index, 'description', e.target.value)}
              />
              <input
                type="number"
                className="w-20 p-2 border border-gray-300 rounded-lg text-sm"
                placeholder="Qty"
                value={item.qty}
                onChange={(e) => handleLineItemChange(index, 'qty', parseInt(e.target.value) || 0)}
              />
              <input
                type="number"
                className="w-24 p-2 border border-gray-300 rounded-lg text-sm"
                placeholder="Unit Price"
                value={item.unitPrice}
                onChange={(e) => handleLineItemChange(index, 'unitPrice', parseFloat(e.target.value) || 0)}
              />
            </div>
          ))}
          <button
            onClick={handleAddLineItem}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg text-sm transition duration-200 ease-in-out flex items-center"
          >
            <span className="mr-2">➕</span> Add Another Item
          </button>
        </div>
        <button
          onClick={handleGenerateInvoice}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-200 ease-in-out flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <span className="mr-2">💰</span>
          )}
          {isLoading ? 'Generating...' : 'Generate Invoice'}
        </button>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Generated Invoice:</h3>
        {invoiceLink === null && !isLoading && (
          <p className="text-gray-500">Enter details above and click "Generate Invoice" to create one.</p>
        )}
        {isLoading && (
          <p className="text-indigo-500 flex items-center">
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Creating your invoice...
          </p>
        )}
        {invoiceLink && (
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <p className="text-indigo-700 font-semibold">Invoice ID: {invoiceLink.id}</p>
            <p className="text-gray-600">Total Amount: ${invoiceLink.total}</p>
            <a
              href={invoiceLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200 ease-in-out"
            >
              <span className="mr-2">🔗</span> Download Invoice PDF
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// 3b. Contract Creator Widget
function ContractCreator() {
  const [clientName, setClientName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [contractType, setContractType] = useState('');
  const [scopeSummary, setScopeSummary] = useState('');
  const [feeStructure, setFeeStructure] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [contractLink, setContractLink] = useState(null);

  const handleGenerateContract = () => {
    setIsLoading(true);
    setContractLink(null); // Clear previous link
    setTimeout(() => {
      // Simulate contract generation
      const contractId = `CONTRACT-${Math.floor(Math.random() * 100000)}`;
      setContractLink({
        id: contractId,
        url: `https://placehold.co/600x400/e0e7ff/4338ca?text=Contract+${contractId}` // Placeholder PDF link
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-200 transform hover:scale-[1.01] transition duration-300 ease-in-out">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center">
        <span className="mr-3">📝</span> AI Contract Creator
      </h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="clientNameCont" className="block text-sm font-medium text-gray-700 mb-1">Client Name/ID:</label>
          <input
            type="text"
            id="clientNameCont"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="e.g., The Williams Family"
          />
        </div>
        <div>
          <label htmlFor="projectNameCont" className="block text-sm font-medium text-gray-700 mb-1">Project Name/ID:</label>
          <input
            type="text"
            id="projectNameCont"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="e.g., Coastal Living Room Redesign"
          />
        </div>
        <div>
          <label htmlFor="contractType" className="block text-sm font-medium text-gray-700 mb-1">Contract Type:</label>
          <select
            id="contractType"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={contractType}
            onChange={(e) => setContractType(e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="Full Design Services">Full Design Services</option>
            <option value="Consulting Agreement">Consulting Agreement</option>
            <option value="Purchase Agreement Addendum">Purchase Agreement Addendum</option>
            <option value="Hourly Services Agreement">Hourly Services Agreement</option>
          </select>
        </div>
        <div>
          <label htmlFor="scopeSummary" className="block text-sm font-medium text-gray-700 mb-1">Brief Scope Summary (Optional):</label>
          <textarea
            id="scopeSummary"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 h-24"
            value={scopeSummary}
            onChange={(e) => setScopeSummary(e.target.value)}
            placeholder="e.g., 'Redesign of living room including furniture selection, color palette, and lighting.'"
          ></textarea>
        </div>
        <div>
          <label htmlFor="feeStructure" className="block text-sm font-medium text-gray-700 mb-1">Agreed Fee Structure (Optional):</label>
          <input
            type="text"
            id="feeStructure"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={feeStructure}
            onChange={(e) => setFeeStructure(e.target.value)}
            placeholder="e.g., 'Flat fee of $5,000' or 'Hourly rate of $150'"
          />
        </div>
        <button
          onClick={handleGenerateContract}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-200 ease-in-out flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <span className="mr-2">📜</span>
          )}
          {isLoading ? 'Generating...' : 'Generate Contract'}
        </button>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Generated Contract:</h3>
        {contractLink === null && !isLoading && (
          <p className="text-gray-500">Enter details above and click "Generate Contract" to create one.</p>
        )}
        {isLoading && (
          <p className="text-indigo-500 flex items-center">
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Drafting your contract...
          </p>
        )}
        {contractLink && (
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <p className="text-indigo-700 font-semibold">Contract ID: {contractLink.id}</p>
            <a
              href={contractLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200 ease-in-out"
            >
              <span className="mr-2">🔗</span> Download Contract PDF
            </a>
            <p className="text-gray-500 text-sm mt-2">Status: Draft Generated. Please review carefully before sending.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// 4. Project Tracker Widget
function ProjectTracker() {
  const [selectedProject, setSelectedProject] = useState('');
  const [milestoneStatus, setMilestoneStatus] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const [dateOfUpdate, setDateOfUpdate] = useState(new Date().toISOString().split('T')[0]);
  const [notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [projectOverview, setProjectOverview] = useState(null);

  const projects = [
    { id: 'GRR', name: 'Greenwich Residence Refurbishment' },
    { id: 'DOF', name: 'Downtown Office Fit-out' },
    { id: 'CLRD', name: 'Coastal Living Room Redesign' },
  ];

  const handleUpdateProgress = () => {
    setIsLoading(true);
    setProjectOverview(null); // Clear previous overview
    setTimeout(() => {
      // Simulate project data fetch/update
      const updatedOverview = {
        overallStatus: newStatus || 'On Track',
        lastUpdated: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        nextMilestone: 'Procurement Phase',
        nextMilestoneDue: 'June 15, 2025',
        milestones: [
          { name: 'Discovery Phase', status: 'Completed', date: 'Apr 10, 2025' },
          { name: 'Design Approval', status: milestoneStatus === 'Design Approval' ? newStatus : 'On Track', date: 'May 25, 2025', notes: milestoneStatus === 'Design Approval' ? notes : 'Awaiting client feedback on updated renderings.' },
          { name: 'Procurement Phase', status: milestoneStatus === 'Procurement Phase' ? newStatus : 'Pending', date: 'Jun 15, 2025' },
          { name: 'Installation Start', status: milestoneStatus === 'Installation Start' ? newStatus : 'Pending', date: 'Jul 10, 2025' },
        ],
        progressPercentage: 50 // Example static progress
      };
      setProjectOverview(updatedOverview);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-200 transform hover:scale-[1.01] transition duration-300 ease-in-out">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center">
        <span className="mr-3">⏰</span> AI Project Tracker
      </h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="selectProject" className="block text-sm font-medium text-gray-700 mb-1">Select Project:</label>
          <select
            id="selectProject"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
          >
            <option value="">Choose a Project</option>
            {projects.map(p => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="milestoneStatus" className="block text-sm font-medium text-gray-700 mb-1">Update Milestone Status:</label>
          <select
            id="milestoneStatus"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={milestoneStatus}
            onChange={(e) => setMilestoneStatus(e.target.value)}
          >
            <option value="">Select Milestone</option>
            <option value="Discovery Phase">Discovery Phase</option>
            <option value="Design Approval">Design Approval</option>
            <option value="Procurement Phase">Procurement Phase</option>
            <option value="Installation Start">Installation Start</option>
            <option value="Final Handover">Final Handover</option>
          </select>
        </div>
        <div>
          <label htmlFor="newStatus" className="block text-sm font-medium text-gray-700 mb-1">New Status:</label>
          <select
            id="newStatus"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="On Track">On Track</option>
            <option value="Delayed">Delayed</option>
            <option value="Completed">Completed</option>
            <option value="At Risk">At Risk</option>
          </select>
        </div>
        <div>
          <label htmlFor="dateOfUpdate" className="block text-sm font-medium text-gray-700 mb-1">Date of Update:</label>
          <input
            type="date"
            id="dateOfUpdate"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={dateOfUpdate}
            onChange={(e) => setDateOfUpdate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Brief Notes (Optional):</label>
          <input
            type="text"
            id="notes"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g., 'Waiting on client approval for fabric samples.'"
          />
        </div>
        <button
          onClick={handleUpdateProgress}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-200 ease-in-out flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <span className="mr-2">⬆️</span>
          )}
          {isLoading ? 'Updating...' : 'Update Progress'}
        </button>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Project Overview:</h3>
        {projectOverview === null && !isLoading && (
          <p className="text-gray-500">Select a project or update progress to view its overview.</p>
        )}
        {isLoading && (
          <p className="text-indigo-500 flex items-center">
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Fetching project status...
          </p>
        )}
        {projectOverview && (
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <p className="text-indigo-700 font-semibold">Overall Status: {projectOverview.overallStatus} (Last Updated: {projectOverview.lastUpdated})</p>
            <p className="text-gray-600">Next Milestone: {projectOverview.nextMilestone} (Due: {projectOverview.nextMilestoneDue})</p>

            <div className="mt-4">
              <p className="font-semibold text-gray-700">Key Milestones:</p>
              <ul className="list-disc list-inside text-gray-600">
                {projectOverview.milestones.map((m, i) => (
                  <li key={i}>
                    <span className="font-medium">{m.name}:</span> {m.status} ({m.date})
                    {m.notes && <span className="text-sm italic"> - {m.notes}</span>}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <p className="font-semibold text-gray-700">Overall Progress:</p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-indigo-500 h-4 rounded-full"
                  style={{ width: `${projectOverview.progressPercentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{projectOverview.progressPercentage}% Complete (Example)</p>
            </div>

            {/* FIX: Changed href to a placeholder URL */}
            <a
              href="https://example.com/project-report"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200 ease-in-out"
            >
              <span className="mr-2">🔗</span> View Full Project Report (Example)
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

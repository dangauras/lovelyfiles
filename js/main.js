const tools = [
    {
        name: 'Merge PDF',
        desc: 'Combine PDFs in the order you want with the easiest PDF merger available.',
        icon: 'images/merge.svg'
    },
    {
        name: 'Split PDF',
        desc: 'Separate one page or a whole set for easy conversion into independent PDF files.',
        icon: 'images/split.svg'
    },
    {
        name: 'Compress PDF',
        desc: 'Reduce file size while optimizing for maximal PDF quality.',
        icon: 'images/compress.svg'
    },
    {
        name: 'PDF to Word',
        desc: 'Easily convert PDF to Word document.',
        icon: 'images/pdf2word.svg'
    },
    {
        name: 'PDF to PowerPoint',
        desc: 'Convert PDF to PowerPoint presentations.',
        icon: 'images/pdf2ppt.svg'
    },
    {
        name: 'PDF to Excel',
        desc: 'Convert PDF tables to Excel spreadsheets.',
        icon: 'images/pdf2excel.svg'
    },
    {
        name: 'Word to PDF',
        desc: 'Convert Word documents to PDF easily.',
        icon: 'images/word2pdf.svg'
    },
    {
        name: 'PowerPoint to PDF',
        desc: 'Convert PowerPoint presentations to PDF.',
        icon: 'images/ppt2pdf.svg'
    },
    {
        name: 'Excel to PDF',
        desc: 'Convert Excel spreadsheets to PDF.',
        icon: 'images/excel2pdf.svg'
    }
];

window.onload = function() {
    const grid = document.getElementById('toolGrid');
    tools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.innerHTML = `
            <img src="${tool.icon}" alt="${tool.name} icon">
            <h3>${tool.name}</h3>
            <p>${tool.desc}</p>
        `;
        grid.appendChild(card);
    });
};

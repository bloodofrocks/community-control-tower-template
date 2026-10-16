const CONFIG = {
  spreadsheetId: 'YOUR_SPREADSHEET_ID',
  dashboard: 'Dashboard',
  leads: 'Leads',
  followUps: 'Follow-ups',
  jobs: 'Jobs',
  applications: 'Applications',
  activity: 'Activity Log',
  dryRun: true
};

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Control Tower')
    .addItem('Set up dashboard', 'setupDashboard')
    .addItem('Refresh dashboard', 'refreshDashboard')
    .addItem('Run dry run', 'runDryRun')
    .addToUi();
}

function setupDashboard() {
  const ss = SpreadsheetApp.openById(CONFIG.spreadsheetId);
  const sheet = getOrCreateSheet_(ss, CONFIG.dashboard);
  sheet.clear();
  sheet.setHiddenGridlines(true);
  sheet.getRange('A1:H1').merge()
    .setValue('Community Control Tower')
    .setFontSize(18)
    .setFontWeight('bold')
    .setFontColor('#ffffff')
    .setBackground('#17365d');
  sheet.getRange('A2:H2').merge()
    .setValue('Owner dashboard | Approval-first | Dry-run mode')
    .setFontColor('#44546a');
  sheet.getRange('A4:H4').setValues([[
    'Area', 'Metric', 'Value', 'Approval required',
    'Next action', 'Owner', 'Status', 'Notes'
  ]]).setFontWeight('bold').setBackground('#d9eaf7');
  sheet.getRange('A5:H8').setValues([
    ['Outreach', 'Open leads', '=COUNTA(Leads!A2:A)', 'Yes', 'Review leads', '', 'Ready', ''],
    ['Outreach', 'Follow-ups due', '=COUNTIF(\'Follow-ups\'!D2:D,"<="&TODAY())', 'Yes', 'Review follow-ups', '', 'Ready', ''],
    ['Jobs', 'Verified jobs', '=COUNTIF(Jobs!F2:F,TRUE)', 'Yes', 'Review jobs', '', 'Ready', ''],
    ['Applications', 'Awaiting approval', '=COUNTIF(Applications!F2:F,"Pending")', 'Yes', 'Review applications', '', 'Ready', '']
  ]);
  sheet.setFrozenRows(4);
  sheet.autoResizeColumns(1, 8);
  refreshDashboard();
}

function refreshDashboard() {
  const sheet = SpreadsheetApp.openById(CONFIG.spreadsheetId)
    .getSheetByName(CONFIG.dashboard);
  if (sheet) {
    sheet.getRange('A2').setValue(
      'Owner dashboard | Approval-first | Dry-run mode | Last refresh: ' +
      new Date()
    );
  }
}

function runDryRun() {
  if (!CONFIG.dryRun) {
    throw new Error('Dry-run is disabled. Review and change CONFIG explicitly.');
  }
  console.log('Dry run completed. No email, social post, or application was sent.');
}

function getOrCreateSheet_(ss, name) {
  return ss.getSheetByName(name) || ss.insertSheet(name);
}
